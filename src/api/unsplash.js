import axios from 'axios';

export default axios.create({

	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID 5aeb78e06af9002f393f0f13cbfe50aa17fdfe93d0d0323b302bcd2a1b763b43'
	}
});