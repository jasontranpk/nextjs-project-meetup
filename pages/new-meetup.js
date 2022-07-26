import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
	const router = useRouter();
	async function addMeetupHandler(data) {
		console.log(data);
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const resData = await response.json();
		console.log(resData);
		router.push('/components');
	}

	return (
		<>
			<Head>
				<title>Add New Meetup</title>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
}

export default NewMeetup;
