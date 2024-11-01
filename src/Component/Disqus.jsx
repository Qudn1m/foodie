import Safe from 'react-safe';
import { useEffect } from 'react';

function Disqus() {
    useEffect(() => {
        // Load Disqus only if it hasn't been loaded already
        if (!window.DISQUS) {
            const d = document, s = d.createElement('script');
            s.src = 'https://foodie-6.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    }, []);

    return (
        <div id="disqus_thread">
            <Safe.script>
                {
                    `function() { 
                        var d = document, s = d.createElement('script');
                        s.src = 'https://foodie-6.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    }`
                }
            </Safe.script>
        </div>
    );
}

export default Disqus;
