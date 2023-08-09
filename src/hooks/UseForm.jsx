import { useState } from 'react'

const UseForm = (steps) => {
    // para mudar a etapa que vai aparecer
    const [currentStep, setCurrentStep] = useState(0);

    // validação e pegar a etapa atual e mudar
    const changeStep = (i, e) => {
        if(e) e.preventDefault();

        if (i < 0 || i >= steps.length) return

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
    };
}

export default UseForm;