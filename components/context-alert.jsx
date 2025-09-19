import { getNetlifyContext } from 'lib/server-utils';
import { Alert } from './alert';
import { Markdown } from './markdown';

const noNetlifyContextAlert = `
For full functionality, either run this site locally via \`netlify dev\`
([see docs](https://docs.netlify.com/cli/local-development/")) or deploy it to Netlify.
`;

export async function ContextAlert(props) {
    const { addedChecksFunction, className } = props;
    const ctx = await getNetlifyContext();

    let markdownText = null;
    if (!ctx) {
        markdownText = noNetlifyContextAlert;
    } else if (addedChecksFunction) {
        markdownText = addedChecksFunction(ctx);
    }

    if (markdownText) {
        return (
            <Alert className={className}>
                <Markdown content={markdownText} />
            </Alert>
        );
    } else {
        return <></>;
    }
}
