(function($) {

    Drupal.behaviors.tripal_biodalliance = {
        attach: function(context, settings) {
            $(function(){
                console.log(settings);

                var $species_name =   settings.tripal_biodalliance.genome_name;

                new Browser({
                    chr:          'Scaffold00001',
                    viewStart:    01,
                    viewEnd:      1000000,

                    coordSystem: {
                        speciesName: $species_name,
                        //taxon: 9606,
                       // auth: 'GRCh',
                       // version: '37',
                      //  ucscName: 'hg19'
                    },

                    //https://hardwoodgenomics.org/tools/jbrowse/index.html?data=chinese_chestnut&loc=scaffold00001%3A171733..257600&tracks=DNA&highlight=
                sources: [{name: 'Genome',
                    jbURI: 'http://jbrowse.app',
                    jbQuery: 'data=sample_data'},
                    ]
                    // sources:     [{name:                 'Genome',
                    //     twoBitURI:            'http://www.biodalliance.org/datasets/hg19.2bit',
                    //     tier_type:            'sequence'},
                    //     {name:                 'Genes',
                    //         desc:                 'Gene structures from GENCODE 19',
                    //         bwgURI:               'http://www.biodalliance.org/datasets/gencode.bb',
                    //         stylesheet_uri:       'http://www.biodalliance.org/stylesheets/gencode.xml',
                    //         collapseSuperGroups:  true,
                    //         trixURI:              'http://www.biodalliance.org/datasets/geneIndex.ix'},
                    //     {name:                 'Repeats',
                    //         desc:                 'Repeat annotation from Ensembl',
                    //         bwgURI:               'http://www.biodalliance.org/datasets/repeats.bb',
                    //         stylesheet_uri:       'http://www.biodalliance.org/stylesheets/bb-repeats.xml'},
                    //     {name:                 'Conservation',
                    //         desc:                 'Conservation',
                    //         bwgURI:               'http://www.biodalliance.org/datasets/phastCons46way.bw',
                    //         noDownsample:         true}],

                });
            })
        }
    }
})(jQuery)