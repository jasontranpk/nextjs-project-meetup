import Head from 'next/head';
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta
					name='description'
					content={props.meetupData.description}
				/>
			</Head>
			<MeetupDetail
				img={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		'mongodb+srv://admin:hCvKABnN7EJ9156H@cluster0.acl7876.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();
	return {
		fallback: false,
		paths: result.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	const client = await MongoClient.connect(
		'mongodb+srv://admin:hCvKABnN7EJ9156H@cluster0.acl7876.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId),
	});
	console.log(selectedMeetup);
	client.close();
	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
				address: selectedMeetup.address,
			},
		},
	};
}

export default MeetupDetails;
