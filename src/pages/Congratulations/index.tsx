import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import * as styles from './styled'

const Congratulations = () => {
    return (
        <styles.styledCongratulations>
            <div className='gradient'>
            <Navbar />
            <div className='content'>
            <span className='title white'>Obrigado!</span>
            <span className='subtitle white'>Cadastro recebico, em breve você receberá uma proposta
no e-mail cadastrado.</span>
            </div>
            </div>
            <Footer />
        </styles.styledCongratulations>
    )
}

export default Congratulations;