import React from 'react'
import Button from '../../components/common/Button/Button'
import InputText from '../../components/common/InputText/InputText'

export const UiKitPage = () => (
    <div style={{ height: '100vh' }}>
        <div>
            blue
            <Button>Send Instructions</Button>
            red
            <Button variant="red">Send Instructions</Button>
            light-blue
            <Button variant="light-blue">Send Instructions</Button>
        </div>
        <div>
            InputText
            <br />
            <InputText placeholder="email" />
        </div>

    </div>
)
