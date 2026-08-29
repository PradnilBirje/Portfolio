(function ($) {
    "use strict";

    // Sticky Navbar logic
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // INFINITE LIVE ANALYTICAL STREAM ENGINE
    $(document).ready(function () {
        const streamConsole = $('#live-terminal-stream');
        
        const pipelineLogs = [
            { node: '#node-1', arrow: '#arrow-1', text: '> [ASK] Parsing business requirements... 100%' },
            { node: '#node-1', arrow: '#arrow-1', text: '> [PREPARE] Ingesting source variables. Schema valid.' },
            { node: '#node-2', arrow: '#arrow-2', text: '> [PROCESS] Executing Python EDA... Nulls handling active.' },
            { node: '#node-2', arrow: '#arrow-2', text: '> [ANALYZE] Optimizing SQL window aggregates... Done.' },
            { node: '#node-3', arrow: null,       text: '> [SHARE] Compiling clean DAX measure cards...' },
            { node: '#node-3', arrow: null,       text: '> [ACT] Quality Check Pass. Integrity verified. [100%]' }
        ];

        let logIndex = 0;

        function runPipelineIteration() {
            // Reset all visual layers first
            $('.flow-node').removeClass('active-pulse');
            $('.flow-arrow').removeClass('active-arrow');

            const currentStep = pipelineLogs[logIndex];

            // Activate current node and terminal statement text string
            $(currentStep.node).addClass('active-pulse');
            if (currentStep.arrow) $(currentStep.arrow).addClass('active-arrow');
            
            streamConsole.text(currentStep.text);

            // Move to the next sequence item
            logIndex = (logIndex + 1) % pipelineLogs.length;

            // Trigger next loop step every 2.5 seconds cleanly
            setTimeout(runPipelineIteration, 2500);
        }

        // Boot up the framework loop engine if terminal layout exists on monitor screen
        if (streamConsole.length > 0) {
            runPipelineIteration();
        }
    });

})(jQuery);
