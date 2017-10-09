(function($) {

    Drupal.behaviors.tripal_biodalliance = {
        attach: function(context, settings) {
            $(function(){

                var species_name =   settings.tripal_biodalliance.species_name;
              //  var $reference_blob =   settings.tripal_biodalliance.blob;
                var ref_path = settings.tripal_biodalliance.path;
                var ref_blob = new File([""],ref_path);

                new Browser({
                    chr:          'scaffold1 0.0',
                    viewStart:    0,
                    viewEnd:      100,

                    coordSystem: {
                        speciesName: species_name,
                        taxon: 9606,
                        auth: 'GRCh',
                        version: '37',
                        ucscName: 'hg19'
                    },

                    sources:     [{name:                 'Genome',
                        twoBitBlob:           ref_blob,
                        tier_type:            'sequence'}]
                });
            })
        }
    }
})(jQuery)