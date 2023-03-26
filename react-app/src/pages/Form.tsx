import React from 'react';

interface FormPageProps {
    
}
 
interface FormPageState {
    
}
 
class FormPage extends React.Component<FormPageProps, FormPageState> {
    state = {cards : [] }
    render() { 
        return (
            <main>
                <div className="container">
                    <div className="form-page__inner">
                        
                    </div>
                </div>
            </main>
        );
    }
}
 
export default FormPage;