(function($) {

    Drupal.behaviors.tripal_biodalliance = {
        attach: function(context, settings) {
            $(function(){
                console.log(settings);

                var $species_name =   settings.tripal_biodalliance.genome_name;
                var $reference_blob =   settings.tripal_biodalliance.blob;

                new Browser({
                    chr:          'scaffold1 0.0',
                    viewStart:    0,
                    viewEnd:      100,

                    coordSystem: {
                        speciesName: $species_name,
                        taxon: 9606,
                        auth: 'GRCh',
                        version: '37',
                        ucscName: 'hg19'
                    },

             //   /Users/chet/UTK/homesteads/localDrupal/sites/default/files/biodalliance

                    sources:     [{name:                 'Genome',
                        twoBitBlob:           $reference_blob,
                        tier_type:            'sequence'}]
                });
            })
        }
    }
})(jQuery)