(function ($) {

    Drupal.behaviors.tripal_biodalliance = {
        attach: function (context, settings) {
            $(function () {

                var species_name = settings.tripal_biodalliance.species_name;
                //  var $reference_blob =   settings.tripal_biodalliance.blob;
                var ref_path = settings.tripal_biodalliance.path;

                var oReq = new XMLHttpRequest();
                oReq.open("GET", ref_path, true);
                oReq.responseType = "blob";
                oReq.onload = function (oEvent) {
                    var ref_blob = oReq.response;
                    new Browser({
                        chr: 'scaffold1 0.0',
                        viewStart: 0,
                        viewEnd: 100,

                        coordSystem: {
                            speciesName: species_name,
                            taxon: 9606,
                            auth: 'GRCh',
                            version: '37',
                            ucscName: 'hg19'
                        },

                        sources: [{
                            name: 'Genome',
                            twoBitBlob: ref_blob,
                            tier_type: 'sequence'
                        }]
                    });
                }

                oReq.send();


            })
        }
    }
})(jQuery)