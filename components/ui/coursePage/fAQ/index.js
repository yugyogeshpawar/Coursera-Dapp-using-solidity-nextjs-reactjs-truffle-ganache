
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FAQJSON from './fAQ.json'

const Accordion = styled((props) => (

    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    margin: '16px 0px',
    border: `1px solid ${theme.palette.divider}`,

    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', fill: '#3030dcad', margin: '10px' }} />}
        {...props}
    />
))(({ theme }) => ({
    
    backgroundColor:
        'rgba(255, 255, 255, .05)',

    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(0),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    
}))

export default function CustomizedAccordions() {


    const [expanded, setExpanded] = useState('panel1')


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }


    return (
        <div>
            <div>
                <div className=" flex flex-col w-full items-center px-2 bg-gray-100 mt-5  lg:mt-10">
                    <div className=" max-w-4xl flex items-center flex-col ">
                        <div className="text-3xl text-gray-700 my-8 px-2 text-center max-w-7xl">
                            Frequently Asked Questions
                        </div>

                        {FAQJSON.map((faq) => (
                            <div key={faq.id}>
                                <Accordion onChange={handleChange('panel1')}>
                                    <AccordionSummary>
                                        <Typography>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{faq.ans}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        ))}
                        <div className='flex my-4 mb-8'>
                            <div className='px-2'>More questions? Visit the
                            </div>
                            <div className='font-bold text-blue-600 hover:underline cursor-pointer'>

                                Learner Help Center.
                            </div>
                        </div>
                        <div>
                            {FAQJSON.ans}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}


