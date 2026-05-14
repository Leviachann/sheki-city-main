import React, { ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { az } from './az';
import { en } from './en';
import { ru } from './ru';
import { useStore } from 'store/store.config';

type TranslationKeys = keyof typeof az | keyof typeof en | keyof typeof ru;

type DynamicValueMap = Record<string, string | ReactNode>;

const useLocalization = () => {
    const languages = useStore('locale');

    return (
        key: TranslationKeys,
        dynamicValues: DynamicValueMap = {}
    ): string | JSX.Element => {
        
        let formattedText: string | JSX.Element = languages[key] || '';

        Object.keys(dynamicValues).forEach((dynamicKey) => {
            const dynamicValue = dynamicValues[dynamicKey];
            
            if (typeof dynamicValue === 'string') {
                formattedText = (formattedText as string).replace(
                    `{${dynamicKey}}`,
                    dynamicValue
                );
            } else if (React.isValidElement(dynamicValue)) {
                const jsxString = renderToStaticMarkup(dynamicValue);
                formattedText = (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: (formattedText as string).replace(
                                `{${dynamicKey}}`,
                                jsxString
                            ),
                        }}
                    />
                );
            }
        });

        return formattedText;
    };
};

export default useLocalization;