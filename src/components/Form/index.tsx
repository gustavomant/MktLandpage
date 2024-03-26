import * as styles from './styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator';
import CampaignService from '../../services/CampaignService';

const Form = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [companyProfile, setCompanyProfile] = useState<string>('');
    const [investment, setInvestment] = useState<number>(0);

    async function handleSubmission() {
        if (
            companyName.trim().length === 0 ||
            phone.trim().length === 0 ||
            !validator.isMobilePhone(phone) ||
            companyProfile.trim().length === 0 ||
            investment === 0
        ) { 
            toast.error('Estão faltando algumas informações', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return ;
        }

        const response = await CampaignService.post(companyName, phone, companyProfile, investment);
        if(response.status !== 200) {
            toast.error('Algo deu errado', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        };
        navigate('/obrigado');
    }

    return (
        <styles.styledForm>
            <h2 className='mb-[21px] title'>
            Como você lida com o Marketing da sua marca? A sua empresa tem Marketing? Ou você finge que não existe?
            </h2>
            <p className='mb-[18px] desc'>
            Nós planejamos e identificamos o seu objetivo, impulsionando metas e desenvolvendo estratégias eficientes.
            </p>
            <input onChange={(e) => setCompanyName(e.target.value)} type='text' className='pretty_input mb-[13px]' placeholder='Nome da Empresa' />
            <input onChange={(e) => setPhone(e.target.value)} type='text' className='pretty_input mb-[13px]' placeholder='Telefone' />
            <input onChange={(e) => setCompanyProfile(e.target.value)} type='text' className='pretty_input mb-[13px]' placeholder='Perfil da Empresa' />
            <input     onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)} type='number' className='pretty_input mb-[21px]' placeholder='Investimento em trafégo pago (R$)' />
            <button onClick={() => handleSubmission()} className='pretty_button'>
                <span>Quero uma proposta</span>
            </button>
            <ToastContainer />
        </styles.styledForm>
    )
}

export default Form;