import birthdayImage from '../../assets/img/events/event-birthday.jpg';
import holidayImage from '../../assets/img/events/event-holiday.jpg';
import babyImage from '../../assets/img/events/event-baby.jpg';
const eventsData = [
    {
        image: birthdayImage,
        title: 'Birthday Celebrations',
        price: '250 dt',
        description: 'Hosting a Birthday Party at our restaurant is a great way to bring a large group together for the ultimate celebration. You can meet with our event manager to plan all the celebration details:',
        details: [
            'Food.',
            'Drinks.',
            'Decorations and party layout.'
        ],
        additionalInfo: 'We will make sure you have a fantastic birthday party.'
    },
    {
        image: holidayImage,
        title: 'Holiday Parties & More',
        price: '250 dt',
        description: 'The holidays are a hectic time of year. With all the responsibilities that come along with hosting, the holidays can come and go without much fun at all. Spend more time with your family and less time in the kitchen by having your holiday celebration at Pasta Cosi. There are many more types of events that we can host at Pasta Cosi like:',
        details: [
            'Graduation parties.',
            'Engagement parties.',
            'Retirement parties.'
        ],
        additionalInfo: 'We will make sure you have a fantastic event party.'
    },
    {
        image: babyImage,
        title: 'Baby & Bridal Showers',
        price: '200dt',
        description: 'Both of these events are the perfect way to celebrate your amazing news! We can create a stress-free way to celebrate your special occasion for an intimate gathering with friends and family! We will take care of:',
        details: [
            'Set up.',
            'Food.',
            'Drinks.'
        ],
        additionalInfo: 'while you focus on the invites, party favors, and decorations and other details for your event.'
    },
];

export default eventsData;
