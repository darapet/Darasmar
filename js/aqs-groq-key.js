(function(){
    var STORAGE_KEY = 'aqs_groq_key';

    /* Master Groq API Key — shared by all users seamlessly.
       The floating key button is intentionally removed; the master key
       provides a shared connection so individual keys are not needed. */
    var MASTER_GROQ_KEY = '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';

    /* Public accessor — used by aqs-create.js, aqs-challenge.js, aqs-docsgen.js, etc.
       Returns any personally-saved key first; falls back to master key. */
    window.getGroqKey = function(){
        var stored = '';
        try { stored = (localStorage.getItem(STORAGE_KEY)||'').trim(); } catch(e){}
        if(stored) return stored;
        return MASTER_GROQ_KEY;
    };

    /* No floating button, no modal — master key handles all AI calls silently */
})();
