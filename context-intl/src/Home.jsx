import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';
import { FormattedMessage, injectIntl } from 'react-intl';

const Home = ({ intl }) => {

	const display = () => {
		const test = `${intl.formatMessage({ id: "phone.placeholder" })}FR`;
		console.log(test);
	}

	const { language } = useContext(LanguageContext);
	return (
		<>
			<input type="text" onClick={display} />
		</>
	)
}

export default injectIntl(Home);