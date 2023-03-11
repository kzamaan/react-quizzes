import axios from '../../utils/axios';

export const getVideos = async () => {
	const { data } = await axios.get('/api/videos');
	return data;
};
