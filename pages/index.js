import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
		address: 'Some address 5, 12345, Paris',
		description: 'This is the first meetup',
	},
	{
		id: 'm2',
		title: 'A second Meetup',
		image: 'https://www.planetware.com/photos-large/F/eiffel-tower.jpg',
		address: 'Some address 5, 12345, Paris',
		description: 'This is the second meetup',
	},
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
