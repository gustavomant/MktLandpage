import * as styles from './styled';
import IconInstagram from '../../assets/icon-instagram.png';
import IconFacebook from '../../assets/icon-facebook.png'; 
import IconTiktok from '../../assets/icon-tiktok.png';
import IconYoutube from '../../assets/icon-youtube.png';
import LogoFooter from '../../assets/logo-footer.png';

const Footer = () => {
    const socialMedia = [
        { url: 'https://www.instagram.com/evoipublicidade/', image: IconInstagram },
        { url: 'https://www.facebook.com/agenciaevoi/', image: IconFacebook },
        { url: 'https://www.tiktok.com/@evoipublicidade', image: IconTiktok },
        { url: 'https://www.youtube.com/channel/UCbOiDuT-tfs-rsAl5XdqxTg', image: IconYoutube }
    ]

    function open(url: string) {
        window.open(url, '_blank');
    }

    return (
        <styles.styledFooter>
            <div className='footer'>
            <div className='flex flex-col text-justify'>
            <p>Alameda Santos, 1293 - Cj. 94 - Jardins - São Paulo - SP</p>
            <strong>contato@evoi.com.br +55 11 94475-7903</strong>
            </div>
            <ul className='social_media flex flex-row'>
                {
                    socialMedia.map((media, index) => {
                        return (
                            <li key={index}>
                                <img onClick={() => open(media.url)} src={media.image} />
                            </li>
                        )
                    })
                }
            </ul>
            <span className='logo_footer'>
                <img alt={"Evoi Publicidade"} src={LogoFooter} />
            </span>
            </div>
        </styles.styledFooter>
    )
}

export default Footer;