<?php
/**
 */
?>

<script language="javascript" src="//www.biodalliance.org/release-0.13/dalliance-compiled.js"></script>
<script language="javascript">
    new Browser({
        chr:          '22',
        viewStart:    30700000,
        viewEnd:      30900000,

        coordSystem: {
            speciesName: 'Human',
            taxon: 9606,
            auth: 'GRCh',
            version: '37',
            ucscName: 'hg19'
        },

        sources:     [{name:                 'Genome',
            twoBitURI:            'http://www.biodalliance.org/datasets/hg19.2bit',
            tier_type:            'sequence'},
            {name:                 'Genes',
                desc:                 'Gene structures from GENCODE 19',
                bwgURI:               'http://www.biodalliance.org/datasets/gencode.bb',
                stylesheet_uri:       'http://www.biodalliance.org/stylesheets/gencode.xml',
                collapseSuperGroups:  true,
                trixURI:              'http://www.biodalliance.org/datasets/geneIndex.ix'},
            {name:                 'Repeats',
                desc:                 'Repeat annotation from Ensembl',
                bwgURI:               'http://www.biodalliance.org/datasets/repeats.bb',
                stylesheet_uri:       'http://www.biodalliance.org/stylesheets/bb-repeats.xml'},
            {name:                 'Conservation',
                desc:                 'Conservation',
                bwgURI:               'http://www.biodalliance.org/datasets/phastCons46way.bw',
                noDownsample:         true}],

    });
</script>

<div id="svgHolder"></div>

