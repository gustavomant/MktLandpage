import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

async function post(name: string, phone: string, profile: string, investment: number) {
    try {
        const url = `${apiUrl}campaign.php`
        const response = await axios.post(url, {
          name: name,
          phone: phone,
          profile: profile,
          investment: investment
        });
        return response;
    } catch (error: any) {
        return error.response;
    }
}

const CampaignService = Object.freeze({
    post
});

export default CampaignService;