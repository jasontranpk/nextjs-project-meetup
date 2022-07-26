import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
			</Head>
			<meta
				name='description'
				content='Browse a huge list of highly active React meetups'
			></meta>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://admin:hCvKABnN7EJ9156H@cluster0.acl7876.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();
	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
