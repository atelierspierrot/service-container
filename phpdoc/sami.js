
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:ServiceContainer" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="ServiceContainer.html">ServiceContainer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:ServiceContainer_ApiServiceContainer" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="ServiceContainer/ApiServiceContainer.html">ApiServiceContainer</a>                    </div>                </li>                            <li data-name="class:ServiceContainer_ServiceContainer" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="ServiceContainer/ServiceContainer.html">ServiceContainer</a>                    </div>                </li>                            <li data-name="class:ServiceContainer_ServiceContainerInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="ServiceContainer/ServiceContainerInterface.html">ServiceContainerInterface</a>                    </div>                </li>                            <li data-name="class:ServiceContainer_ServiceProviderInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="ServiceContainer/ServiceProviderInterface.html">ServiceProviderInterface</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "ServiceContainer.html", "name": "ServiceContainer", "doc": "Namespace ServiceContainer"},
            {"type": "Interface", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ServiceContainerInterface.html", "name": "ServiceContainer\\ServiceContainerInterface", "doc": "&quot;A simple service container interface&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_setProvider", "name": "ServiceContainer\\ServiceContainerInterface::setProvider", "doc": "&quot;Define a service constructor like &lt;code&gt;array( name , callback , protected )&lt;\/code&gt; or a closure&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_setService", "name": "ServiceContainer\\ServiceContainerInterface::setService", "doc": "&quot;Register a new service called &lt;code&gt;$name&lt;\/code&gt; declared as NOT protected by default&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_getService", "name": "ServiceContainer\\ServiceContainerInterface::getService", "doc": "&quot;Get a service called &lt;code&gt;$name&lt;\/code&gt; throwing an error by default if it does not exist yet and can not be created&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_hasService", "name": "ServiceContainer\\ServiceContainerInterface::hasService", "doc": "&quot;Test if a service exists in the container&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_unsetService", "name": "ServiceContainer\\ServiceContainerInterface::unsetService", "doc": "&quot;Unset a service if it is not protected&quot;"},
            
            {"type": "Interface", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ServiceProviderInterface.html", "name": "ServiceContainer\\ServiceProviderInterface", "doc": "&quot;Interface ServiceProviderInterface&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_register", "name": "ServiceContainer\\ServiceProviderInterface::register", "doc": "&quot;Launch actions when the service is registered in the container&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_boot", "name": "ServiceContainer\\ServiceProviderInterface::boot", "doc": "&quot;Launch actions when the service is created&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_terminate", "name": "ServiceContainer\\ServiceProviderInterface::terminate", "doc": "&quot;Launch actions when the service is destructed&quot;"},
            
            
            {"type": "Class", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ApiServiceContainer.html", "name": "ServiceContainer\\ApiServiceContainer", "doc": "&quot;A service container with constructors based on an API declaration and validation&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ApiServiceContainer", "fromLink": "ServiceContainer/ApiServiceContainer.html", "link": "ServiceContainer/ApiServiceContainer.html#method_apiFactory", "name": "ServiceContainer\\ApiServiceContainer::apiFactory", "doc": "&quot;Usage:&quot;"},
            
            {"type": "Class", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html", "name": "ServiceContainer\\ServiceContainer", "doc": "&quot;A simple service container with constructors&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_init", "name": "ServiceContainer\\ServiceContainer::init", "doc": "&quot;Initialize the service container system&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_setProvider", "name": "ServiceContainer\\ServiceContainer::setProvider", "doc": "&quot;Define a service constructor like &lt;code&gt;array( name , callback , protected )&lt;\/code&gt; or a closure&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_getProvider", "name": "ServiceContainer\\ServiceContainer::getProvider", "doc": "&quot;Get a service constructor if it exists&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_hasProvider", "name": "ServiceContainer\\ServiceContainer::hasProvider", "doc": "&quot;Test if a constructor exists for a service&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_setProtected", "name": "ServiceContainer\\ServiceContainer::setProtected", "doc": "&quot;Define a service as protected&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_isProtected", "name": "ServiceContainer\\ServiceContainer::isProtected", "doc": "&quot;Test if a service is protected&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_setService", "name": "ServiceContainer\\ServiceContainer::setService", "doc": "&quot;Register a new service called &lt;code&gt;$name&lt;\/code&gt; declared as NOT protected by default&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_getService", "name": "ServiceContainer\\ServiceContainer::getService", "doc": "&quot;Get a service called &lt;code&gt;$name&lt;\/code&gt; throwing an error by default if it does not exist yet and can not be created&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_hasService", "name": "ServiceContainer\\ServiceContainer::hasService", "doc": "&quot;Test if a service exists in the container&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainer", "fromLink": "ServiceContainer/ServiceContainer.html", "link": "ServiceContainer/ServiceContainer.html#method_unsetService", "name": "ServiceContainer\\ServiceContainer::unsetService", "doc": "&quot;Unset a service if it is not protected&quot;"},
            
            {"type": "Class", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ServiceContainerInterface.html", "name": "ServiceContainer\\ServiceContainerInterface", "doc": "&quot;A simple service container interface&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_setProvider", "name": "ServiceContainer\\ServiceContainerInterface::setProvider", "doc": "&quot;Define a service constructor like &lt;code&gt;array( name , callback , protected )&lt;\/code&gt; or a closure&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_setService", "name": "ServiceContainer\\ServiceContainerInterface::setService", "doc": "&quot;Register a new service called &lt;code&gt;$name&lt;\/code&gt; declared as NOT protected by default&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_getService", "name": "ServiceContainer\\ServiceContainerInterface::getService", "doc": "&quot;Get a service called &lt;code&gt;$name&lt;\/code&gt; throwing an error by default if it does not exist yet and can not be created&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_hasService", "name": "ServiceContainer\\ServiceContainerInterface::hasService", "doc": "&quot;Test if a service exists in the container&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceContainerInterface", "fromLink": "ServiceContainer/ServiceContainerInterface.html", "link": "ServiceContainer/ServiceContainerInterface.html#method_unsetService", "name": "ServiceContainer\\ServiceContainerInterface::unsetService", "doc": "&quot;Unset a service if it is not protected&quot;"},
            
            {"type": "Class", "fromName": "ServiceContainer", "fromLink": "ServiceContainer.html", "link": "ServiceContainer/ServiceProviderInterface.html", "name": "ServiceContainer\\ServiceProviderInterface", "doc": "&quot;Interface ServiceProviderInterface&quot;"},
                                                        {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_register", "name": "ServiceContainer\\ServiceProviderInterface::register", "doc": "&quot;Launch actions when the service is registered in the container&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_boot", "name": "ServiceContainer\\ServiceProviderInterface::boot", "doc": "&quot;Launch actions when the service is created&quot;"},
                    {"type": "Method", "fromName": "ServiceContainer\\ServiceProviderInterface", "fromLink": "ServiceContainer/ServiceProviderInterface.html", "link": "ServiceContainer/ServiceProviderInterface.html#method_terminate", "name": "ServiceContainer\\ServiceProviderInterface::terminate", "doc": "&quot;Launch actions when the service is destructed&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


