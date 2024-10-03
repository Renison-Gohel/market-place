// import Link from 'next/link'
import React from 'react'

const HelpPage = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="shortcut icon" href="favicon.ico" />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '@charset "UTF-8";*,::after,::before{box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}a{background-color:transparent}b{font-weight:bolder}img{border-style:none}button,input{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button{text-transform:none}[type=button]:not(a),button{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:root{--balloon-border-radius:2px;--balloon-color:rgba(16, 16, 16, 0.95);--balloon-color:#00334d;--balloon-text-color:#fff;--balloon-font-size:12px;--balloon-move:4px}@media (max-height:46em) and (min-width:1048px){html{font-size:.875em}}@media (max-height:40em) and (min-width:1048px){html{font-size:.75em}}body{font-family:"Whitney A","Whitney B","Helvetica Neue",Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#00334d;text-align:left}.text-center{text-align:center!important}.mb-0{margin-bottom:0!important}.mt-3{margin-top:1.5rem!important}.d-none{display:none!important}.container::after,.site-header::after{display:block;clear:both;content:""}h1,h2,h3,h4,h5{margin-bottom:1rem;font-family:inherit;font-weight:500;line-height:1.2;color:#00334d}h1{font-size:2.5rem;line-height:1.05em;font-weight:400}@media (min-width:1048px){h1{font-size:3.375rem}}@media (min-width:1300px){h1{font-size:3.375rem}}h2{font-weight:500;font-size:1.75rem}@media (min-width:1048px){h2{font-size:2.5rem}}@media (min-width:1300px){h2{font-size:2.5rem}}h3{font-weight:500;font-size:1.25rem}@media (min-width:1048px){h3{font-size:1.75rem}}@media (min-width:1300px){h3{font-size:1.75rem}}h4{font-weight:500;font-size:1.0625rem}@media (min-width:1048px){h4{font-size:1.25rem}}@media (min-width:1300px){h4{font-size:1.25rem}}h5{font-size:1.0625rem}@media (min-width:1048px){h5{font-size:1.25rem}}@media (min-width:1300px){h5{font-size:1.25rem}}a h3{color:#28628f}:disabled{opacity:.65}.form-control{display:block;width:100%;line-height:1.5;font-size:1rem;background-color:#fff;background-clip:padding-box;font-size:1rem;border:1px solid #c0c5ca}.font-size-md{font-size:1.25rem}@media (min-width:1048px){.font-size-md{font-size:1.75rem}}@media (min-width:1300px){.font-size-md{font-size:1.75rem}}p{margin:1rem 0;font-size:1.0625rem}@media (min-width:1048px){p{font-size:1.25rem}}@media (min-width:1300px){p{font-size:1.25rem}}p a{text-decoration:underline}.icon{display:inline-block;width:1em;height:1em;vertical-align:-.125em;fill:currentColor}.icon--base{font-size:1.35rem}.modal{outline:0}.modal .modal-title{font-size:2.5rem;margin-top:0}.btn{border:0;border-radius:.25rem;display:inline-block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;text-decoration:none;vertical-align:middle;white-space:nowrap}.btn-primary{border:0;color:#fff;background-color:#6cb33f;background-image:linear-gradient(to bottom,#79c04c 0,#61a038 100%);background-repeat:repeat-x}.btn-secondary{border:0;color:#fff;background:0 0;border:solid 1px #dfe6ec;color:#28628f}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm{padding:.5rem .5rem;font-size:.875rem;line-height:1;border-radius:.2rem}.container{padding:1.5rem 1rem 1.5rem 1rem;max-width:91.25rem;margin:0 auto}.container::after{display:block;clear:both;content:""}@media (min-width:576px){.container{padding:2rem 1.5rem 2rem 1.5rem}}@media (min-width:768px){.container{padding:3rem 2rem 3rem 2rem}}@media (min-width:768px){.container{padding:3rem 2rem 3rem 2rem}}.notification-banner{position:relative;text-align:center;z-index:500}.notification-banner .container{color:#fff;padding:.5rem 2rem;position:relative}.notification-banner .notification-banner__text{font-size:.875rem;margin:0;color:#fff}.notification-banner .notification-banner__text a{color:#fff}@media (min-width:1048px){.notification-banner .notification-banner__text{font-size:1.0625rem}}.site-nav ul{list-style:none}.site-nav ul.site-nav__level-1{padding:0;margin:0}.media-item__figure img,.site-header__logo img{max-width:100%;height:auto}@media (min-width:768px){.home .container--site-header__global{padding:0 1.5rem!important}}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__form,.page-hero--supplier-discovery .container .page-hero__form,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__form,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__form{grid-area:a}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__header,.page-hero--supplier-discovery .container .page-hero__header,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__header,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__header{grid-area:b;max-width:50rem;margin:0 auto}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__subheader,.page-hero--supplier-discovery .container .page-hero__subheader,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__subheader,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__subheader{grid-area:c}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__info,.page-hero--supplier-discovery .container .page-hero__info,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__info,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__info{grid-area:e}.marketing .page-hero--supplier-discovery .inner-wrap .value-prop,.page-hero--supplier-discovery .container .value-prop,.page-hero--supplier-discovery .marketing .inner-wrap .value-prop,.page-hero--supplier-discovery .reg-page__secondary__content .value-prop{grid-area:d;display:grid;grid-template-rows:auto;grid-gap:24px;grid-template-columns:1fr 1fr;grid-column-gap:2rem;grid-row-gap:2rem}.site-search .form-group{flex:1 0 auto;flex-flow:row nowrap}.site-search .form-control{border:none}.site-search .site-search__input-wrap{padding:.25rem 0;background:#fff;text-align:left;display:flex;flex-flow:column nowrap;flex:1 0 auto}@media (min-width:576px){.site-search .site-search__input-wrap{flex-flow:row nowrap}}.site-search .site-search__search-query-input-wrap{display:flex;flex:1 0 auto}.site-search .search-options{display:flex;flex-flow:row nowrap;align-content:center}.site-search .search-options-toggle{padding:.6rem 1rem .5rem 1rem}.site-search input.search-query{border-top:solid 1px #ced4da!important;font-size:1.0625rem;width:100%;padding:.7rem 1rem;vertical-align:middle}.site-search button.search-execute{width:100%;height:3.2rem;margin-top:.5rem}@media (min-width:576px){.site-search .search-options-toggle{width:10rem}.site-search input.search-query{border-top:none!important;border-left:solid 1px #ced4da!important;flex:1 0 auto}.site-search button.search-execute{margin-top:0;margin-left:1%;width:19%;height:3.5rem}}.home-hero .site-search .thm-custom-select.search-options-regions{display:none}.search-suggest-preview{position:relative}.thm-custom-select{position:relative;text-align:left}.thm-custom-select .custom-select-toggle{display:flex!important;flex:1 0 auto}.thm-custom-select .custom-select-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent;position:absolute;top:1.3rem;right:1rem}.thm-custom-select .custom-select-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(33,37,41,.15);border-radius:.25rem;box-shadow:0 .5rem 1rem rgba(33,37,41,.175);max-height:20rem;overflow:scroll;overflow-x:auto;overflow-y:auto;-ms-overflow-x:auto;-ms-overflow-y:auto}@media (min-width:768px){.thm-custom-select .custom-select-menu{max-height:32rem}}.thm-custom-select .custom-select-menu-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background:0 0;border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0;box-shadow:inset 0 1px 1px rgba(33,37,41,.075)}.form-control::-ms-expand{background-color:transparent;border:0}.form-control::-moz-placeholder{color:#868e96;opacity:1}.form-control:-ms-input-placeholder{color:#868e96;opacity:1}.form-control-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0}.form-group{margin-bottom:1rem}.form-inline{display:flex;flex-flow:row wrap;align-items:center}@media (min-width:576px){.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}a{text-decoration:none;color:#28628f;background-color:transparent}.code-input{grid-area:input}.apply-button{grid-area:button}.code-feedback{grid-area:feedback}.site-header{background-color:#00334d;z-index:1000}.container--site-header__global{display:flex;flex-direction:row;align-items:center;position:relative;padding:0}.site-header__logo{z-index:10000;line-height:0;width:100%;max-width:15rem;padding:.75rem 1rem}@media (max-width:768px){.container--site-header__global{padding-left:3rem}}@media (min-width:1048px){.site-footer{grid-area:site-footer}}.profile-overview__progress{display:flex;align-items:center;justify-content:center;grid-area:chart}.profile-overview__title{margin:0;align-items:center;display:flex;grid-area:content}.profile-overview__message{margin:0;align-items:flex-start;display:flex;grid-area:content2}.profile-overview__btngroup{grid-area:content3}.profile-overview__preferences{grid-area:preference;display:flex;flex-direction:column;justify-content:center}.summary-metrics--supplier-analytics{grid-area:SA1}.audience-table--supplier-analytics{grid-area:SA2}.sourcing-activity-graph{grid-area:SA3}.market-share-graph{grid-area:SA4}.leads-graph{grid-area:SA5}.competitors-preview-table{grid-area:SA6}.videos-preview-table{grid-area:SA8}.program-points-preview-table{grid-area:SA7}.conversation-preview__logo{grid-area:conversation-preview__logo;padding:0;margin:0;border:1px solid #dfe6ec;border-radius:100%;height:2.875rem;width:2.875rem;overflow:hidden;-o-object-fit:contain;object-fit:contain;float:left;margin-right:.5rem}.conversation-preview__participant{grid-area:conversation-preview__participant;font-size:1.0625rem;font-weight:500;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.conversation-preview__subject{grid-area:conversation-preview__subject;font-size:.875rem;font-weight:400;margin:0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.conversation-preview__message-preview{grid-area:conversation-preview__message-preview;font-size:.875rem;color:#616668;font-weight:400;margin:0;display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.conversation-preview__timestamp{grid-area:conversation-preview__timestamp;font-size:.875rem;color:#616668;font-weight:400;margin:0;display:inline-block;justify-self:right;float:right}.conversation-preview__temp-indicator{grid-area:conversation-preview__temp-indicator;justify-self:right;align-self:end;float:right;clear:right}.conversation-list__logo{grid-area:conversation-preview__logo;padding:0;margin:0;border:1px solid #dfe6ec;border-radius:100%;height:2.875rem;width:2.875rem;overflow:hidden;-o-object-fit:contain;object-fit:contain;float:left;margin-right:.5rem}:root{--blue:#28628f;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#d0021b;--orange:#f67134;--yellow:#ffc107;--green:#6cb33f;--teal:#20c997;--cyan:#3cb4e7;--white:#fff;--gray:#dfe6ec;--gray-dark:#616668;--primary:#6cb33f;--secondary:#28628f;--success:#6cb33f;--info:#3cb4e7;--warning:#ffc107;--danger:#bc4239;--light:#f8f9fa;--dark:#343a40;--white:#fff;--black:#212529;--green:#6cb33f;--blue:#28628f;--blueMedium:#03405f;--blueDark:#00334d;--cyan:#3cb4e7;--gray:#dfe6ec;--grayLight:#ecf1f5;--grayMedium:#a4acb3;--grayDark:#616668;--red:#d0021b;--orange:#f67134;--darkOrange:#cd701b;--yellow:#ffc107;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:1048px;--breakpoint-xl:1300px;--font-family-sans-serif:"Whitney A","Whitney B","Helvetica Neue",Arial,sans-serif;--font-family-monospace:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}figcaption,figure,header,nav,section{display:block}body{margin:0;font-family:"Whitney A","Whitney B","Helvetica Neue",Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#00334d}h1,h2,h3,h4,h5{margin-top:0;margin-bottom:1rem}p{margin-top:0;margin-bottom:1rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}b{font-weight:bolder}a{color:#28628f;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.media-item__figure img,.site-header__logo img{max-width:100%;height:auto}.container{padding:1.5rem 1rem 1.5rem 1rem;max-width:91.25rem;min-width:0;margin:0 auto}@media (min-width:576px){.container{padding:2rem 1.5rem 2rem 1.5rem}}@media (min-width:768px){.container{padding:3rem 2rem 3rem 2rem}}@media (max-height:46em) and (min-width:65em){html{font-size:.875em}}@media (max-height:40em) and (min-width:65em){html{font-size:.75em}}h1,h2,h3,h4,h5{margin-bottom:1rem;font-family:inherit;font-weight:500;line-height:1.2;color:#00334d}h1{font-size:2.5rem;line-height:1.05em;font-weight:400}@media (min-width:1048px){h1{font-size:3.375rem}}@media (min-width:1300px){h1{font-size:3.375rem}}h2{font-weight:500;font-size:1.75rem}@media (min-width:1048px){h2{font-size:2.5rem}}@media (min-width:1300px){h2{font-size:2.5rem}}h3{font-weight:500;font-size:1.25rem}@media (min-width:1048px){h3{font-size:1.75rem}}@media (min-width:1300px){h3{font-size:1.75rem}}h4{font-weight:500;font-size:1.0625rem}@media (min-width:1048px){h4{font-size:1.25rem}}@media (min-width:1300px){h4{font-size:1.25rem}}h5{font-size:1.0625rem}@media (min-width:1048px){h5{font-size:1.25rem}}@media (min-width:1300px){h5{font-size:1.25rem}}a h3{color:#28628f}.font-size-md{font-size:1.25rem}@media (min-width:1048px){.font-size-md{font-size:1.75rem}}@media (min-width:1300px){.font-size-md{font-size:1.75rem}}p{margin:1rem 0;font-size:1.0625rem}@media (min-width:1048px){p{font-size:1.25rem}}@media (min-width:1300px){p{font-size:1.25rem}}p a{text-decoration:underline}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0}.form-control::-ms-expand{background-color:transparent;border:0}.form-control::-moz-placeholder{color:#868e96;opacity:1}.form-control:-ms-input-placeholder{color:#868e96;opacity:1}.form-control-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:0}.form-group{margin-bottom:1rem}.form-inline{display:flex;flex-flow:row wrap;align-items:center}@media (min-width:576px){.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;border:0;text-decoration:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.btn-primary{background-image:linear-gradient(to bottom,#79c04c 0,#61a038 100%);background-repeat:repeat-x;border:0;color:#fff!important;text-decoration:none!important}.btn-primary{color:#fff;background-color:#6cb33f;border-color:#6cb33f}.btn-secondary{color:#fff;background-color:#28628f;border-color:#28628f}.btn-secondary{color:#fff}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.25;border-radius:.2rem}.fade{opacity:0}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:600;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#6cb33f}.close{float:right;font-size:1.5rem;font-weight:600;line-height:1;color:#212529;text-shadow:0 1px 0 #fff;opacity:.5}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem}.modal.fade .modal-dialog{transform:translate(0,-25%)}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;background-color:#fff;background-clip:padding-box;border:1px solid rgba(33,37,41,.2);border-radius:.3rem;outline:0}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}}.container::after,.site-header::after{display:block;clear:both;content:""}.d-none{display:none!important}.mb-0{margin-bottom:0!important}.mt-3{margin-top:1rem!important}.text-center{text-align:center!important}.icon{display:inline-block;width:1em;height:1em;vertical-align:-.125em;fill:currentColor}.icon--base{font-size:1.35rem}.section-header{margin-bottom:2rem}@media (min-width:576px){.section-header{margin-bottom:2.5rem}}.section-header__primary{font-weight:500;font-size:1.75rem;margin-bottom:0}@media (min-width:1048px){.section-header__primary{font-size:2.5rem}}@media (min-width:1300px){.section-header__primary{font-size:2.5rem}}.container>:first-child{margin-top:0!important}.container>:last-child{margin-bottom:0!important}.font-size-md{font-size:1.25rem}@media (min-width:1048px){.font-size-md{font-size:1.75rem}}@media (min-width:1300px){.font-size-md{font-size:1.75rem}}.site-nav ul{list-style:none}.site-nav-container{padding-top:4rem;background-color:#00334d;width:17em;height:100%;left:-17em;top:0;bottom:0;z-index:1000;position:fixed;overflow:scroll}@media (min-width:768px){.site-nav-container{padding-top:0;width:100%;height:auto;right:auto;bottom:auto;top:auto;position:static;background-color:transparent;overflow:visible;display:flex;align-items:stretch;justify-content:space-between}}.site-nav{background-color:#00334d;text-align:left}.site-nav span{display:inline-block;line-height:1em;vertical-align:middle;text-align:center}@media (min-width:768px){.site-nav{display:block;position:relative;top:0;left:0;background-color:#00334d}}@media (min-width:1048px){.site-nav{background-color:#00334d}}.site-nav__level-1{margin:0;padding:0;list-style:none}@media (min-width:768px){.site-nav__level-1{height:4rem;display:flex}}.site-nav__li-l1{display:block;border-bottom:1px solid #004467;background-color:#00334d;position:relative}.site-nav__li-l1 span{font-size:1.25rem}.site-nav__li-l1>a{display:block;height:4rem;line-height:4rem;color:#fff;text-decoration:none;padding:0 1rem}.site-nav__li-l1>a:visited{color:#fff}.site-nav__li-l1.menu-item-has-children>a span{background-size:.65rem .65rem}@media (min-width:768px){.site-nav__li-l1{height:4rem;float:left;border-bottom:0;border-right:0 solid #004467;text-align:center}.site-nav__li-l1 span{font-size:1rem}.site-nav__li-l1>a{padding:.5em .5rem 0 .5rem;color:#fff}.site-nav__li-l1.menu-item-has-children>a span{padding-right:.75em;background-image:url(images/ico-arrow-down-nav.svg);background-repeat:no-repeat;background-position:right center}}@media (min-width:1048px){.site-nav__li-l1{border-right:0 solid #004467}.site-nav__li-l1 span{font-size:1.0625rem}.site-nav__li-l1>a{color:#fff}}.site-nav__level-2{padding:0;margin:0;display:none;position:relative;list-style:none}@media (min-width:768px){.site-nav__level-2{box-shadow:0 3px 5px 0 rgba(0,0,0,.32);position:absolute;width:12em}}.site-nav__li-l2,.site-nav__li-l3{background-color:#03405f;position:relative}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 2rem;color:#fff;border-top:1px solid #005580;display:block;text-decoration:none;height:4rem!important;line-height:4rem;text-transform:none;text-align:left}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem;line-height:1.25em;display:inline-block;vertical-align:middle;text-align:left}.site-nav__li-l2:last-child>a,.site-nav__li-l3:last-child>a{border-bottom:0}@media (min-width:768px){.site-nav__li-l2,.site-nav__li-l3{position:relative;background-color:#03405f;width:100%}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 1rem;line-height:4rem;border-top:1px solid #005580;border-right:0}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem}}@media (min-width:1048px){.site-nav__li-l2,.site-nav__li-l3{background-color:#03405f}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 1rem;line-height:4rem;border-top:1px solid #005580}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem}}.site-nav__level-3{padding:0;margin:0;display:none;position:relative}@media (min-width:768px){.site-nav__level-3{position:absolute;top:0;left:100%;width:12em}}@media (max-width:767.98px){.site-nav__li-l3{background-color:#00293e}.site-nav__li-l3 a{padding:0 2rem 0 3rem}}@media (min-width:768px){.site-nav__li-l3{box-shadow:0 3px 5px 0 rgba(0,0,0,.32);z-index:3}.site-nav__li-l3:first-child a{border-top:0}}.site-nav-container-screen{position:fixed;display:none;z-index:999;left:0;right:0;bottom:0;top:0;background-color:rgba(0,0,0,.5);text-decoration:none}@media (min-width:768px){.site-nav-container-screen{display:none!important}}.close-menu{display:inline-block;color:#fff;font-size:1.75em;line-height:1em;transform:rotate(45deg)}@media (min-width:1048px){.close-menu{display:none}}.snc-header{text-align:right;padding:1em;position:fixed;background-color:#00334d;top:0;left:-17em;width:17em;z-index:2}@media (min-width:768px){.snc-header{padding:0;display:none}}.home .global-nav .site-nav__li-l1>a span{font-size:1.25rem}.home .site-nav__li-l1>a{background-color:transparent;color:#fff}.site-header__logo{display:block;text-align:left;position:relatve;z-index:10000;width:9rem;float:left;height:2.5rem;line-height:2.5rem;padding:0 .5rem 0 1rem}@media (min-width:768px){.site-header__logo{height:4rem}}@media (min-width:1048px){.site-header__logo{height:4rem}}@media (min-width:768px){.site-header__logo{line-height:4rem}}@media (min-width:1048px){.site-header__logo{line-height:4rem}}.site-header__logo img{width:100%;max-width:100%;display:inline-block;vertical-align:top}@media (min-width:768px){.site-header__logo{float:left;width:12em;max-width:100%;position:relative;flex-shrink:0}.site-header__logo img{vertical-align:middle}}@media (min-width:1048px){.site-header__logo{margin-right:1.5rem}}@media (min-width:768px){.home .container--site-header__global{padding:0 1.5rem!important}}.global-nav{background-color:#00334d}@media (min-width:768px){.global-nav{float:left}.global-nav .site-nav__li-l1>a{color:#a4acb3}}@media (min-width:1048px){.global-nav{float:left}}.container--site-header__global{padding:0}@media (min-width:768px){.container--site-header__global{padding:0 0}}@media (min-width:768px){.utility-nav{float:right}.utility-nav .site-nav__li-l1>a{color:#a4acb3}}.bg--gray-light{background-color:#ecf1f5}.site-header{background-color:#00334d;grid-area:site-header;z-index:1000}.site-header .container{padding-top:0;padding-bottom:0;height:2.5rem}@media (min-width:768px){.site-header .container{height:4rem}}@media (min-width:1048px){.site-header .container{height:4rem}}@media (min-width:768px){.site-header{position:relative;background-color:#00334d}}@media (min-width:768px){.site-header__mobile-icons-menu{display:none}}.nav__ico-link{text-align:center;display:block;float:left;background-image:linear-gradient(to right,#00334d 0,#03405f 100%);background-repeat:repeat-x;color:#fff;line-height:.75em;padding:0 .75rem;height:2.5rem;line-height:2.5rem}@media (min-width:768px){.nav__ico-link{height:4rem}}@media (min-width:1048px){.nav__ico-link{height:4rem}}@media (min-width:768px){.nav__ico-link{line-height:4rem}}@media (min-width:1048px){.nav__ico-link{line-height:4rem}}.nav__ico-link img{width:auto;display:inline-block;margin:0 auto;max-width:1.5em}@media (min-width:768px){.nav__ico-link{padding:0 1rem}}.site-header__global{background-color:#00334d}@media (min-width:768px){.site-header__global{position:relative;z-index:2}}@media (min-width:768px){.container--site-header__global{display:flex;align-items:stretch}}.home .site-header .site-header__global{background-color:transparent!important}@media (min-width:768px){.home .site-header{float:left}.home .site-header .site-nav__li-l1>a{color:#fff}}.site-aside{background-image:linear-gradient(to right,#00334d 0,#03405f 100%);background-repeat:repeat-x;grid-area:site-aside;background-color:#00334d;width:17em;height:100%;left:-17em;top:4rem;bottom:0;z-index:1000;position:fixed;overflow:scroll}.site-content{grid-area:site-content}.site-footer{background-color:#00334d;grid-area:site-footer}.site-wrap{background-color:#fff}@media (min-width:768px){.home .site-header{position:absolute!important;left:0;right:0;background-color:transparent!important}.home .site-header .site-nav{background-color:transparent!important}.home .site-header .site-nav__li-l1{background-color:transparent}.home .site-header .site-header__logo{display:none}}.diversity-home .page-hero--diversity .container .page-hero__header,.diversity-home .page-hero--diversity .marketing .inner-wrap .page-hero__header,.diversity-home .page-hero--diversity .reg-page__secondary__content .page-hero__header,.marketing .diversity-home .page-hero--diversity .inner-wrap .page-hero__header{grid-area:a}.diversity-home .page-hero--diversity .container .page-hero__subheader,.diversity-home .page-hero--diversity .marketing .inner-wrap .page-hero__subheader,.diversity-home .page-hero--diversity .reg-page__secondary__content .page-hero__subheader,.marketing .diversity-home .page-hero--diversity .inner-wrap .page-hero__subheader{grid-area:b;color:#ecf1f5;margin-top:0}.diversity-home .page-hero--diversity .container .site-search,.diversity-home .page-hero--diversity .marketing .inner-wrap .site-search,.diversity-home .page-hero--diversity .reg-page__secondary__content .site-search,.marketing .diversity-home .page-hero--diversity .inner-wrap .site-search{grid-area:c;width:100%}.diversity-home .page-hero--diversity .container .value-prop,.diversity-home .page-hero--diversity .marketing .inner-wrap .value-prop,.diversity-home .page-hero--diversity .reg-page__secondary__content .value-prop,.marketing .diversity-home .page-hero--diversity .inner-wrap .value-prop{grid-area:d}.diversity-home .page-hero--diversity .container .page-hero__info,.diversity-home .page-hero--diversity .marketing .inner-wrap .page-hero__info,.diversity-home .page-hero--diversity .reg-page__secondary__content .page-hero__info,.marketing .diversity-home .page-hero--diversity .inner-wrap .page-hero__info{grid-area:e}.three-steps-module-ibe{text-align:center;padding:0;background:linear-gradient(96.64deg,#ecf1f5 0,#fff 19.68%,#f6f9ff 100%);display:block!important;align-items:center;overflow:auto}.three-steps-module-ibe .inner-wrap-ibe{max-width:80%;margin:auto}.tsm-item-ibe{margin-bottom:1.875em;max-width:25em;display:inline-block;vertical-align:top;width:100%}@media (min-width:60em){.tsm-steps-wrap-ibe{display:-webkit-box;display:-moz-box;display:box;display:-moz-flex;display:flex;font-size:1vw}}.tsm-item-ibe{max-width:none;float:left}.tsm-item-ibe:nth-of-type(3n){padding-right:0}@media (min-width:80em){.tsm-steps-wrap-ibe{font-size:1em}}.tsmi-inner-wrap-ibe{display:-webkit-box;display:-moz-box;display:box;display:-moz-flex;display:flex}@media (min-width:60em){.tsmi-inner-wrap-ibe{display:-webkit-box;display:-moz-box;display:box;display:-moz-flex;display:flex;-webkit-box-lines:multiple;-moz-box-lines:multiple;box-lines:multiple;flex-wrap:wrap;box-align:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center;-ms-flex-align:center}}.tsmi-counter-ibe{color:#e3e9ee;float:left;width:6em;padding-right:1.2em}.tsmi-counter-ibe span{font-size:128px;line-height:1em;margin-top:-20px;font-weight:600;font-style:normal;display:inline-block;vertical-align:top}@media (min-width:60em){.tsmi-counter-ibe span{font-size:10em;margin:0}}.tsmi-desc-ibe{float:left;width:calc(100% - 7em);text-align:left}.tsmi-heading-ibe{margin-bottom:5px;font-style:normal;font-weight:500;font-size:28px;line-height:32px;color:#03405f}.tsmi-text-ibe,.tsmi-text-ibe a{margin:0;color:#000;font-size:17px;line-height:26px}@media (max-width:390px){.three-steps-module-ibe .inner-wrap-ibe{max-width:80%;margin:auto}.tsmi-desc-ibe{float:left;width:calc(100% - 65em);text-align:left}.tsmi-counter-ibe span{font-size:90px}.tsmi-counter-ibe{padding-right:0;width:3em}.tsmi-heading-ibe{margin-bottom:5px;font-style:normal;font-weight:500;font-size:20px;line-height:20px}}.home-hero__h1{font-size:40px}.subhead-ibe{font-size:20px;color:#03405f}.site-header{background-color:#00334d;position:relative;z-index:1000}.site-header .container{padding-top:0;padding-bottom:0;height:2.5rem}@media (min-width:768px){.site-header .container{height:4rem}}@media (min-width:1048px){.site-header .container{height:4rem}}@media (min-width:768px){.site-header{position:relative;background-color:#00334d}}@media (min-width:768px){.site-header__mobile-icons-menu{display:none}}.nav__ico-link{text-align:center;display:block;float:left;background-image:linear-gradient(to right,#00334d 0,#03405f 100%);background-repeat:repeat-x;color:#fff;line-height:.75em;padding:0 .75rem;height:2.5rem;line-height:2.5rem}@media (min-width:768px){.nav__ico-link{height:4rem}}@media (min-width:1048px){.nav__ico-link{height:4rem}}@media (min-width:768px){.nav__ico-link{line-height:4rem}}@media (min-width:1048px){.nav__ico-link{line-height:4rem}}.nav__ico-link img{width:auto;display:inline-block;margin:0 auto;max-width:1.5em}.site-header__global{background-color:#00334d}@media (min-width:768px){.site-header__global{position:relative;z-index:2}}@media (min-width:768px){.container--site-header__global{display:flex;align-items:stretch}}.home .site-header .site-header__global{background-color:transparent!important}@media (min-width:768px){.home .site-header{float:left}.home .site-header .site-nav__li-l1>a{color:#fff}}.home-hero{background-color:#00334d;text-align:center;background-image:linear-gradient(to right,#00334d 0,#03405f 100%);background-repeat:repeat-x}.home-hero .site-search{max-width:50em;margin:0 auto}@media (min-width:768px){.home-hero{background-image:url(images/hero-bg.jpg);background-size:cover;background-position:center center;background-attachment:fixed}}.home-hero .container{padding-top:3rem;padding-bottom:1.5rem}@media (min-width:576px){.home-hero .container{padding-top:3rem;padding-bottom:1.5rem}}@media (min-width:768px){.home-hero .container{padding-top:8rem;padding-bottom:5rem}}@media (min-width:1048px){.home-hero .container{padding-top:9rem;padding-bottom:7.5rem}}.home-hero__h1{color:#fff;font-size:1.25rem;font-weight:500;font-weight:400;margin-bottom:2rem}@media (min-width:1048px){.home-hero__h1{font-size:1.75rem}}@media (min-width:1300px){.home-hero__h1{font-size:1.75rem}}@media (max-width:767.98px){.home-hero__h1{font-size:1.75rem}}@media (min-width:576px){.home-hero__h1{margin-bottom:2.5rem}}.home-hero__logo{display:none;margin-bottom:4rem}.home-hero__logo img{display:inline-block;margin-right:.75em;max-width:12em}.home-hero__logo figcaption{display:inline-block;color:#fff;vertical-align:middle;line-height:1em;font-size:.875rem;font-weight:400}@media (min-width:1048px){.home-hero__logo figcaption{font-size:1.0625rem}}@media (min-width:1300px){.home-hero__logo figcaption{font-size:1.0625rem}}@media (min-width:768px){.home-hero__logo{display:block}.home-hero__logo img{margin-right:1.1em;max-width:18em}.home-hero__logo figcaption{font-size:1.25rem;font-weight:500}}@media (min-width:768px) and (min-width:1048px){.home-hero__logo figcaption{font-size:1.75rem}}@media (min-width:768px) and (min-width:1300px){.home-hero__logo figcaption{font-size:1.75rem}}.home-hero__search-bar{max-width:50em;margin:0 auto}.content-block .section-header,.content-block .section-header--inverted{grid-area:head;margin-bottom:1.5rem}.content-block__media{grid-area:media;text-align:center;margin-bottom:0}.content-block__body{grid-area:body}.category-lists .container{background-color:#fff}.category-lists__lists{display:grid;grid-template-rows:auto;grid-gap:24px;grid-template-columns:1fr}.category-lists__lists>*{min-width:0;max-width:100%}@media (min-width:576px){.category-lists__lists{grid-template-columns:repeat(auto-fit,minmax(15em,1fr))}}.page-hero__info{font-size:1.0625rem;margin-bottom:0;margin-top:2rem;color:#fff}@media (min-width:1048px){.page-hero__info{font-size:1.25rem}}@media (min-width:1300px){.page-hero__info{font-size:1.25rem}}.page-hero__info a{color:#6cb33f;text-decoration:underline}.search-result__figure{grid-area:icon}.search-result__noimg{grid-area:icon;display:flex;justify-content:center;align-items:center;width:120px;height:120px;border:1px solid #a7a9aa;background-color:#f0f0f0}.search-result__table{grid-area:results}.search-result__view-all{font-size:1.0625rem;grid-area:viewall;color:#6cb33f;padding-top:1rem}.search-results__related{grid-area:related}.page-content__figure{grid-area:figure;margin-bottom:1rem}.page-content__author-exerpt{grid-area:exerpt;padding-bottom:1rem}.page-content__primary{grid-area:page-content__primary}.page-content__secondary{grid-area:page-content__secondary;margin-bottom:2rem}.page-content__header{grid-area:page-content__header;padding-bottom:1rem;border-bottom:1px solid #dfe6ec}.page-content__desc{grid-area:page-content__desc}.page-content--landing-page h1{grid-area:h1}.page-content--landing-page .lead{grid-area:lead}.page-content--landing-page .publisher{grid-area:publisher}.article-previews .section-header,.article-previews .section-header--inverted{grid-area:sectionheader;margin-bottom:1rem}.article-previews__view-all{grid-area:viewall;font-size:1.0625rem;color:#6cb33f}.article-previews__wrap{grid-area:previews;padding-left:0}.site-nav ul{list-style:none}.site-nav-container{padding-top:4rem;background-color:#00334d;width:17em;height:100%;left:-17em;top:0;bottom:0;z-index:1000;position:fixed;overflow:scroll}@media (min-width:768px){.site-nav-container{padding-top:0;width:100%;height:auto;right:auto;bottom:auto;top:auto;position:static;background-color:transparent;overflow:visible;display:flex;align-items:stretch;justify-content:space-between}}.site-nav{background-color:#00334d;text-align:left}.site-nav span{display:inline-block;line-height:1em;vertical-align:middle;text-align:center}@media (min-width:768px){.site-nav{display:block;position:relative;top:0;left:0;background-color:#00334d}}@media (min-width:1048px){.site-nav{background-color:#00334d}}.site-nav__level-1{margin:0;padding:0;list-style:none}@media (min-width:768px){.site-nav__level-1{height:4rem;display:flex}}.site-nav__li-l1{display:block;border-bottom:1px solid #004467;background-color:#00334d;position:relative}.site-nav__li-l1 span{font-size:1.25rem}.site-nav__li-l1>a{display:block;height:4rem;line-height:4rem;color:#fff;text-decoration:none;padding:0 1rem}.site-nav__li-l1>a:visited{color:#fff}.site-nav__li-l1.menu-item-has-children>a span{background-size:.65rem .65rem}@media (min-width:768px){.site-nav__li-l1{height:4rem;float:left;border-bottom:0;border-right:0 solid #004467;text-align:center}.site-nav__li-l1 span{font-size:1rem}.site-nav__li-l1>a{padding:.5em .5rem 0 .5rem;color:#fff}.site-nav__li-l1.menu-item-has-children>a span{padding-right:.75em;background-image:url(images/ico-arrow-down-nav.svg);background-repeat:no-repeat;background-position:right center}}@media (min-width:1048px){.site-nav__li-l1{border-right:0 solid #004467}.site-nav__li-l1 span{font-size:1.0625rem}.site-nav__li-l1>a{color:#fff}}.site-nav__li-l1 .opt_supplier-notification{font-size:.85rem!important;font-weight:600}@media (max-width:845px) and (min-width:768px){.site-nav__li-l1 .opt_nav-adjustment{font-size:.875rem!important}}@media (min-width:768px){.site-nav__li-l1 .opt_supplier-notification{font-size:.5rem!important;position:absolute;top:1.45rem;right:-.25rem;z-index:2}}.site-nav__level-2{padding:0;margin:0;display:none;position:relative;list-style:none}@media (min-width:768px){.site-nav__level-2{box-shadow:0 3px 5px 0 rgba(0,0,0,.32);position:absolute;width:12em}}.site-nav__li-l2,.site-nav__li-l3{background-color:#03405f;position:relative}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 2rem;color:#fff;border-top:1px solid #005580;display:block;text-decoration:none;height:4rem!important;line-height:4rem;text-transform:none;text-align:left}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem;line-height:1.25em;display:inline-block;vertical-align:middle;text-align:left}.site-nav__li-l2:last-child>a,.site-nav__li-l3:last-child>a{border-bottom:0}@media (min-width:768px){.site-nav__li-l2,.site-nav__li-l3{position:relative;background-color:#03405f;width:100%}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 1rem;line-height:4rem;border-top:1px solid #005580;border-right:0}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem}}@media (min-width:1048px){.site-nav__li-l2,.site-nav__li-l3{background-color:#03405f}.site-nav__li-l2>a,.site-nav__li-l3>a{padding:0 1rem;line-height:4rem;border-top:1px solid #005580}.site-nav__li-l2>a span,.site-nav__li-l3>a span{font-size:1.0625rem}}.site-nav__level-3{padding:0;margin:0;display:none;position:relative}@media (min-width:768px){.site-nav__level-3{position:absolute;top:0;left:100%;width:12em}}@media (max-width:767.98px){.site-nav__li-l3{background-color:#00293e}.site-nav__li-l3 a{padding:0 2rem 0 3rem}}@media (min-width:768px){.site-nav__li-l3{box-shadow:0 3px 5px 0 rgba(0,0,0,.32);z-index:3}.site-nav__li-l3:first-child a{border-top:0}}.site-nav-container-screen{position:fixed;display:none;z-index:999;left:0;right:0;bottom:0;top:0;background-color:rgba(0,0,0,.5);text-decoration:none}@media (min-width:768px){.site-nav-container-screen{display:none!important}}.close-menu{display:inline-block;color:#fff;font-size:1.75em;line-height:1em;transform:rotate(45deg)}@media (min-width:768px){.close-menu{display:none}}.snc-header{text-align:right;padding:1em;position:fixed;background-color:#00334d;top:0;left:-17em;width:17em;z-index:2}@media (min-width:768px){.snc-header{padding:0;display:none}}.home .global-nav .site-nav__li-l1>a span{font-size:1.25rem}.home .site-nav__li-l1>a{background-color:transparent;color:#fff}.site-header__logo{display:block;text-align:left;position:relatve;z-index:10000;width:9rem;float:left;height:2.5rem;line-height:2.5rem;padding:0 .5rem 0 1rem}@media (min-width:768px){.site-header__logo{height:4rem}}@media (min-width:1048px){.site-header__logo{height:4rem}}@media (min-width:768px){.site-header__logo{line-height:4rem}}@media (min-width:1048px){.site-header__logo{line-height:4rem}}.site-header__logo img{width:100%;max-width:100%;display:inline-block;vertical-align:top}@media (min-width:768px){.site-header__logo{float:left;width:12em;max-width:100%;position:relative;flex-shrink:0}.site-header__logo img{vertical-align:middle}}@media (min-width:1048px){.site-header__logo{margin-right:1.5rem}}@media (min-width:768px){.home .container--site-header__global{padding:0 1.5rem!important}}.global-nav{background-color:#00334d}@media (min-width:768px){.global-nav{float:left}.global-nav .site-nav__li-l1>a{color:#a4acb3}}@media (min-width:1048px){.global-nav{float:left}}.container--site-header__global{padding:0}@media (min-width:768px){.container--site-header__global{padding:0 0}}@media (min-width:768px){.utility-nav{float:right}.utility-nav .site-nav__li-l1>a{color:#a4acb3}}.titled-list{display:flex;flex-direction:column;text-align:left;-moz-column-break-inside:avoid;break-inside:avoid}.titled-list__header{font-size:1.0625rem;border-bottom:1px dashed #dee2e6;width:100%;padding-bottom:.25rem;line-height:1em}@media (min-width:1048px){.titled-list__header{font-size:1.25rem}}@media (min-width:1300px){.titled-list__header{font-size:1.25rem}}.titled-list__header a{color:#28628f}.titled-list__list{list-style:none;padding:0;margin-bottom:0}.titled-list__list li{font-size:.875rem;margin-bottom:.5rem}@media (min-width:1048px){.titled-list__list li{font-size:1.0625rem}}@media (min-width:1300px){.titled-list__list li{font-size:1.0625rem}}.titled-list__list li a{color:#616668}.titled-list--dropdown .titled-list__header{display:flex;align-items:center;justify-content:space-between}.titled-list--dropdown .titled-list__header span{display:flex;height:20px;width:30px;justify-content:flex-end;align-items:center}.titled-list--dropdown .titled-list__header span:after{content:"";width:0;height:0;content:"";z-index:2;border-top:7px solid #28628f;border-left:7px solid transparent;border-right:7px solid transparent}.titled-list--dropdown .titled-list__list li{font-size:0;margin-bottom:0}@media (min-width:576px){.titled-list--dropdown .titled-list__header span{display:none}.titled-list--dropdown .titled-list__list li{font-size:.875rem;margin-bottom:.5rem}}@media (min-width:576px) and (min-width:1048px){.titled-list--dropdown .titled-list__list li{font-size:1.0625rem}}@media (min-width:576px) and (min-width:1300px){.titled-list--dropdown .titled-list__list li{font-size:1.0625rem}}.article-content__info{grid-area:article-info;margin-bottom:1rem;border-bottom:1px solid #dfe6ec;padding-bottom:1rem;display:block;width:100%}.article-content__header{grid-area:article-head;margin-bottom:1rem}.article-content__primary{grid-area:article-primary;margin-bottom:2rem}.article-content__secondary{width:100%;grid-area:article-secondary;margin-bottom:2rem}.article-content__category-label{font-size:.875rem;margin-bottom:.5rem;margin-top:0;grid-area:article-category}.category-tab-nav .category-tab-nav__content{background:#fff;display:none;padding:1rem;width:100%}@media (min-width:768px){.category-tab-nav .category-tab-nav__content{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-right-radius:0;border:1px solid #fff;float:left}}.media-item{background:#fff;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;padding:1rem;overflow:hidden;border:1px solid #dfe6ec}.media-item__figure{flex:1;display:flex;justify-content:center;align-items:center;padding:0;margin:0;margin:.5rem 0}.media-item__label{display:flex;padding:0;align-self:center;text-align:center;color:#28628f;font-size:1.0625rem;margin-bottom:0}@media (min-width:1048px){.media-item__label{font-size:1.25rem}}@media (min-width:1300px){.media-item__label{font-size:1.25rem}}.page-hero__info{margin-top:2rem!important}@media (min-width:768px){.page-hero__info{margin-top:3rem!important}}@media (min-width:1024px){.home-hero .container{padding-top:8rem!important}}.site-search .form-group{flex:1 0 auto;flex-flow:row nowrap}.site-search .form-control{border:none}.site-search .site-search__input-wrap{padding:.25rem 0;background:#fff;text-align:left;display:flex;flex-flow:column nowrap;flex:1 0 auto}@media (min-width:576px){.site-search .site-search__input-wrap{flex-flow:row nowrap}}.site-search .site-search__search-query-input-wrap{display:flex;flex:1 0 auto}.site-search .search-options{display:flex;flex-flow:row nowrap;align-content:center}.site-search .search-options-toggle{padding:.6rem 1rem .5rem 1rem}.site-search input.search-query{border-top:solid 1px #ced4da!important;font-size:1.0625rem;width:100%;padding:.7rem 1rem;vertical-align:middle}.site-search button.search-execute{width:100%;height:3.2rem;margin-top:.5rem}@media (min-width:576px){.site-search .search-options-toggle{width:10rem}.site-search input.search-query{border-top:none!important;border-left:solid 1px #ced4da!important;flex:1 0 auto}.site-search button.search-execute{margin-top:0;margin-left:1%;width:19%;height:3.5rem}}.home-hero .site-search .thm-custom-select.search-options-regions{display:none}.supplier-search-results__header{overflow:hidden;grid-area:supplier-search-results-header}.supplier-search-results__main{grid-area:supplier-search-results-main}.supplier-search-results__aside{grid-area:supplier-search-results-secondary}.profile-card__header{grid-area:head}.profile-card__supplier-data{grid-area:supplier-data;font-size:.875rem;margin:0;display:flex;flex-flow:row;flex-wrap:wrap;justify-content:flex-start;margin-top:.25rem;width:75%}.profile-card__button-group{grid-area:ctas;margin-top:1rem;padding-top:1rem;border-top:1px solid #ced4da;text-align:center}.profile-card__featured{grid-area:featured}.profile-card__content{grid-area:content;display:block}.profile-card-tab{position:relative;padding:1rem;margin:1rem -.75rem 0;grid-area:featured}.supplier-search-results__filters{grid-area:supplier-search-results-filters;font-size:.875rem}.thm-custom-select{position:relative;text-align:left}.thm-custom-select .custom-select-toggle{display:flex!important;flex:1 0 auto}.thm-custom-select .custom-select-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent;position:absolute;top:1.3rem;right:1rem}.thm-custom-select .custom-select-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(33,37,41,.15);border-radius:.25rem;max-height:20rem;overflow:scroll;overflow-x:auto;overflow-y:auto;-ms-overflow-x:auto;-ms-overflow-y:auto}@media (min-width:768px){.thm-custom-select .custom-select-menu{max-height:32rem}}.thm-custom-select .custom-select-menu-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background:0 0;border:0}.search-suggest-preview{position:relative}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__form,.page-hero--supplier-discovery .container .page-hero__form,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__form,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__form{grid-area:a}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__header,.page-hero--supplier-discovery .container .page-hero__header,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__header,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__header{grid-area:b;max-width:50rem;margin:0 auto}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__subheader,.page-hero--supplier-discovery .container .page-hero__subheader,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__subheader,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__subheader{grid-area:c}.marketing .page-hero--supplier-discovery .inner-wrap .page-hero__info,.page-hero--supplier-discovery .container .page-hero__info,.page-hero--supplier-discovery .marketing .inner-wrap .page-hero__info,.page-hero--supplier-discovery .reg-page__secondary__content .page-hero__info{grid-area:e}.marketing .page-hero--supplier-discovery .inner-wrap .value-prop,.page-hero--supplier-discovery .container .value-prop,.page-hero--supplier-discovery .marketing .inner-wrap .value-prop,.page-hero--supplier-discovery .reg-page__secondary__content .value-prop{grid-area:d;display:grid;grid-template-rows:auto;grid-gap:24px;grid-template-columns:1fr 1fr;grid-column-gap:2rem;grid-row-gap:2rem}.media-center-list__media{grid-area:media-center-list__media}.media-center-list__list-1{grid-area:media-center-list__list-1}.media-center-list__list-2{grid-area:media-center-list__list-2}.modal-body,.modal-header{padding:1rem 2rem}.modal-dialog{max-width:25rem}.modal-header{text-align:center;display:block}.modal--regwall .modal-header .close{position:absolute;top:.75rem;right:1rem}.modal-body{text-align:center}.reg-wall__value-prop{padding:1rem 3rem}.modal--regwall .modal-content{overflow:hidden}.reg-wall__logo{display:block;width:100%;padding:1rem 1rem 0 1rem;margin-bottom:0}.reg-wall__logo img{display:block;margin:0 auto;width:15rem;height:2.8125rem}.modal--regwall .modal-title{width:100%}#regWall .modal-title{font-size:1.25rem}.cookie-banner__section{position:fixed;top:auto;bottom:0;right:0;background-color:#00334d;color:#fff;width:100%;height:auto;display:flex;align-items:center;padding:.2rem .2rem .2rem .2rem;font-size:.875rem;z-index:10000}.cookie-banner__section .cookie-banner__content{width:98%;text-align:center;padding:.15rem .15rem .15rem .15rem}.cookie-banner__section .cookie-banner__content a{color:#6cb33f;text-decoration:underline}.cookie-banner__section.inactive{display:none}.notification-banner{text-align:center;position:relative}.notification-banner .container{color:#fff;background-color:#00334d;background-image:linear-gradient(to right,#00334d 0,#043b57 100%);background-repeat:repeat-x;position:relative;padding:.5rem 2rem;max-width:100%;border-bottom:1px solid #03405f}.notification-banner a{color:#fff}.notification-banner p:last-of-type{margin-bottom:0}.notification-banner__text{font-size:.875rem}@media (min-width:1048px){.notification-banner__text{font-size:1.0625rem}}@media (min-width:1300px){.notification-banner__text{font-size:1.0625rem}}@media screen and (min-width:1024px){.home-hero .container{padding-bottom:5.75rem!important}}'
                }}
            />
            <link rel="manifest" href="https://www.thomasnet.com/manifest.json" />
            <meta name="theme-color" content="#01334D" />

            {/* <Link rel="stylesheet" type="text/css" href="css/E7526FBA320375AFB.css" /> */}

            <meta
                name="google-site-verification"
                content="RLN0c2LO_JmNv22bDwPNvZ-CCXQPSzT8OR-ji0Iv-K0"
            />
            <meta
                name="google-site-verification"
                content="J8EV81E0wPrIyzie8V1xVEDfPClUY-YNZarcYMvB4m0"
            />
            <meta
                name="google-site-verification"
                content="a2TIdz9tG2RzH0yDhjX3cSkCoxYrfmANHrrlNRRIeWE"
            />
            <meta
                name="google-site-verification"
                content="bDyvPrIj3jIMNindxwdUVIlI864MfqLl_zdYnhKpOC8"
            />
            <meta
                name="google-site-verification"
                content="JfXbBcWcSIz0QyUCbJTzfd16vGiNdwVfWAOgQEpnJA0"
            />
            <link href="https://www.thomasnet.com/" rel="canonical" />
            <meta
                name="title"
                content="Thomasnet® - Product Sourcing and Supplier Discovery Platform - Find North American Manufacturers, Suppliers and Industrial Companies"
            />
            <meta
                name="description"
                content="Thomasnet.com is the leading product sourcing and supplier discovery platform for procurement professionals, engineers, plant & facility management and business owners seeking trusted suppliers for MRO, OEM and other products/services for their industrial, manufacturing, commercial and institutional businesses"
            />
            <meta name="robots" content="index,follow" />
            <meta name="referrer" content="unsafe-url" />
            <meta
                property="og:title"
                content="Thomasnet® - Product Sourcing and Supplier Discovery Platform - Find North American Manufacturers, Suppliers and Industrial Companies"
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="images/og-thomas-for-industry.jpg" />
            <meta property="og:url" content="https://www.thomasnet.com" />
            <meta
                property="og:description"
                content="Thomasnet.com is the leading product sourcing and supplier discovery platform for procurement professionals, engineers, plant & facility management and business owners seeking trusted suppliers for MRO, OEM and other products/services for their industrial, manufacturing, commercial and institutional businesses"
            />
            <title>
                Thomasnet® - Product Sourcing and Supplier Discovery Platform - Find North
                American Manufacturers, Suppliers and Industrial Companies
            </title>
            <div data-thcomponent="regwall-modal" />
            <div className="site-wrap logged-out">
                {/*Site Header*/}
                <header className="site-header" role="banner" data-thdoc="S1">
                    <div className="site-header__global">
                        <div className="container container--site-header__global">
                            <span className="site-header__mobile-icons-menu ">
                                <a href="#menu" className="nav__ico-link sh-ico-menu menu-link">
                                    <img src="images/ico-nav.svg" alt="" />
                                </a>
                            </span>
                            <a href="https://www.thomasnet.com" className="site-header__logo">
                                <img src="images/logoipsum-287.svg" alt="Thomas Logo" />
                            </a>
                            <div className="site-nav-container ">
                                <div className="snc-header">
                                    <a href="#" className="close-menu menu-link">
                                        +
                                    </a>
                                </div>
                                <nav className="site-nav global-nav" role="navigation">
                                    <ul className="site-nav__level-1">
                                        <li className="site-nav__li-l1 menu-item-has-children">
                                            <a
                                                href="https://www.thomasnet.com/network/"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>For Buyers</span>
                                            </a>
                                            <ul className="site-nav__level-2">
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/suppliers/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Supplier Discovery</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/instantquote/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Instant Quote</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/catalogs/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Product Catalogs</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://cad.thomasnet.com/cadmodels.html"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>CAD Models</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="site-nav__li-l1 menu-item-has-children">
                                            <a
                                                href="https://business.thomasnet.com"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>For Suppliers</span>
                                            </a>
                                            <ul className="site-nav__level-2">
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/get-listed-on-thomasnet"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Claim Your Company</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2 menu-item-has-children">
                                                    <a href="" data-ad_click="UR" data-event_type="ilink">
                                                        <span>Advertise</span>
                                                    </a>
                                                    <ul className="site-nav__level-3">
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/programs/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Thomasnet.com Programs</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/display-advertising-for-manufacturers/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Display Advertising</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/lp-tiu-sponsorship"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Newsletter Advertising</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/video-advertising-services/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Video Advertising Services</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/get-listed-on-thomasnet"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Claim Your Company</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="site-nav__li-l2 menu-item-has-children">
                                                    <a
                                                        href="https://business.thomasnet.com/industrial-marketing-services/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Marketing Services</span>
                                                    </a>
                                                    <ul className="site-nav__level-3">
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/seo-for-manufacturing-companies/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Search Engine Optimization</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/manufacturing-website-design/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Website Development Services</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/online-product-catalog-platform-navigator/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>eCommerce &amp; Product Data</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/inbound-marketing-for-manufacturers"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Inbound Marketing for Manufacturers</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/content-marketing-for-manufacturing"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Content Marketing Services</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/lead-generation-for-manufacturers"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Lead Generation Services</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/thomas-certified-agency"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>For Marketing Agencies</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/webtrax/"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Thomas WebTrax</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="site-nav__li-l2 menu-item-has-children">
                                                    <a href="" data-ad_click="UR" data-event_type="ilink">
                                                        <span>Resources</span>
                                                    </a>
                                                    <ul className="site-nav__level-3">
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/resources"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Free eBook Library</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/resources#thomas-sourcing-data"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Sourcing Activity Snapshots</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://blog.thomasnet.com"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Blog</span>
                                                            </a>
                                                        </li>
                                                        <li className="site-nav__li-l3">
                                                            <a
                                                                href="https://business.thomasnet.com/events/together-for-industry"
                                                                data-ad_click="UR"
                                                                data-event_type="ilink"
                                                            >
                                                                <span>Webinars</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/lp-contact-digital"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Digital Health Check</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/buyer-report"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Buyer Intent Report</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/contact"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Contact</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="site-nav__li-l1 menu-item-has-children">
                                            <a
                                                href="https://www.thomasnet.com/insights/"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>Industry Insights</span>
                                            </a>
                                            <ul className="site-nav__level-2">
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/insights/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Industry News</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/articles/"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Technical Guides</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://www.thomasnet.com/insights/industry-videos"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Industry Videos</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <nav className="site-nav  utility-nav">
                                    <ul className="site-nav__level-1">
                                        <li className="site-nav__li-l1 menu-item-has-children">
                                            <a
                                                href="https://business.thomasnet.com/about"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>About</span>
                                            </a>
                                            <ul className="site-nav__level-2">
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/about"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>About Us</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://careers.thomasnet.com"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Careers</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://business.thomasnet.com/press-room"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                    >
                                                        <span>Press Room</span>
                                                    </a>
                                                </li>
                                                <li className="site-nav__li-l2">
                                                    <a
                                                        href="https://help.thomasnet.com"
                                                        data-ad_click="UR"
                                                        data-event_type="ilink"
                                                        target="_blank"
                                                    >
                                                        <span>Help Center</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="site-nav__li-l1">
                                            <a
                                                href="https://business.thomasnet.com/get-listed-on-thomasnet?nav_src=utilitynav"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>Claim Your Company</span>
                                            </a>
                                            <ul className="site-nav__level-2"></ul>
                                        </li>
                                        {/* nav__item__my-account */}
                                        {/* if the user is not logged in then show the register button and the login button */}
                                        <li className="site-nav__li-l1" id="opt_view-saved-suppliers">
                                            <a href="/account/saved/suppliers">
                                                <span className="opt_nav-label opt_nav-adjustment">
                                                    Saved Suppliers
                                                </span>
                                                <span className="opt_supplier-notification badge badge-pill badge-primary opt_nav-adjustment">
                                                    0
                                                </span>
                                            </a>
                                        </li>
                                        <li className="site-nav__li-l1" id="nav-login">
                                            <a
                                                href="https://www.thomasnet.com/account/login"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span>Login</span>
                                            </a>
                                        </li>
                                        <li className="site-nav__li-l1" id="nav-register">
                                            <a
                                                href="https://www.thomasnet.com/account/register"
                                                data-ad_click="UR"
                                                data-event_type="ilink"
                                            >
                                                <span className="btn btn-primary">
                                                    <svg
                                                        viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon--base"
                                                    >
                                                        <title>Register</title>
                                                        <g fill="currentColor" fillRule="evenodd">
                                                            <path d="M20.605 18.138c1.252-1.539 1.941-3.598 1.941-5.795 0-4.47-2.885-8.107-6.433-8.107-3.547 0-6.432 3.637-6.432 8.107 0 2.197.69 4.256 1.941 5.796 1.21 1.489 2.806 2.308 4.491 2.308 1.686 0 3.281-.82 4.492-2.309z" />
                                                            <path d="M21.041 19.802c-.083.09-.166.178-.25.263a6.526 6.526 0 0 1-.321.293c-.089.078-.176.158-.267.23-.111.09-.226.17-.342.253-.093.066-.184.135-.279.196-.119.076-.24.144-.363.212-.096.054-.19.11-.286.16-.127.062-.257.115-.387.17-.097.04-.191.086-.29.12-.137.052-.277.09-.418.13-.092.027-.185.06-.278.083-.158.038-.318.061-.478.087-.08.013-.159.032-.239.042a6.205 6.205 0 0 1-1.46-.002c-.079-.01-.155-.029-.233-.04-.162-.026-.324-.05-.483-.089-.093-.022-.181-.054-.272-.08-.143-.042-.286-.08-.426-.132-.096-.035-.188-.079-.282-.118-.133-.056-.265-.11-.394-.174-.095-.047-.187-.103-.28-.156-.125-.07-.25-.138-.37-.216-.094-.06-.183-.126-.274-.192-.117-.083-.233-.164-.346-.256-.09-.072-.177-.15-.265-.228a7.953 7.953 0 0 1-.322-.294c-.086-.085-.168-.175-.252-.265-.067-.073-.138-.139-.203-.214-4.175 1.319-6.925 4.963-7.167 8.078h24.598c-.242-3.114-2.992-6.76-7.166-8.076-.066.076-.137.142-.205.215z" />
                                                        </g>
                                                    </svg>{" "}
                                                    Register
                                                </span>
                                            </a>
                                        </li>
                                        {/* if the user is logged in then show  My Account and get rid of the login button.*/}
                                    </ul>
                                </nav>
                            </div>
                            {/* site-nav-container END*/}
                            <a href="" className="site-nav-container-screen menu-link">
                                �&nbsp;
                            </a>
                        </div>
                    </div>
                </header>
                <section className="home-hero" data-thdoc="S3">
                    <div className="container">
                        <figure className="home-hero__logo">
                            <img
                                src="images/logoipsum-287.svg"
                                alt="Thomas For Industry Logo"
                            />
                            <figcaption>For Industry.</figcaption>
                        </figure>
                        {/* <h1 class="home-hero__h1">Find Suppliers, Insights, Marketing and more. </h1> */}
                        <h1 className="home-hero__h1">
                            Search and Buy with The Industrial Buying Engine™
                        </h1>
                        <div id="homesearch" className="search-bar home-hero__search-bar">
                            <form
                                className="site-search form-inline"
                                data-page-type="home"
                                data-thcomponent="search-box"
                            >
                                <div className="form-group">
                                    <div className="site-search__input-wrap">
                                        <div className="thm-custom-select search-options">
                                            <a
                                                href="#custom-select-toggle"
                                                className="custom-select-toggle search-options-toggle"
                                            >
                                                <span>�&nbsp;</span>
                                            </a>
                                        </div>
                                        <div className="site-search__search-query-input-wrap search-suggest-preview">
                                            <input
                                                autoComplete="off"
                                                className="form-control form-control-lg search-query"
                                                placeholder="Search Here"
                                                defaultValue="All"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-lg btn-primary search-execute"
                                    >
                                        �&nbsp;
                                    </button>
                                </div>
                            </form>
                        </div>
                        <p className="page-hero__info">
                            New to Thomas?{" "}
                            <a href="/account/register">
                                Join Free for Full Access{" "}
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                >
                                    <title>ico-arrow-default-right</title>
                                    <path
                                        d="M18.895 6.306L17.783 7.43a1 1 0 0 0 .003 1.41l5.284 5.282H3a1 1 0 0 0-1 1v1.893a1 1 0 0 0 1 1h20.068L17.781 23.3a1 1 0 0 0 0 1.414l1.115 1.115a1 1 0 0 0 1.417-.003l8.988-9.054a1 1 0 0 0 0-1.409l-8.986-9.057a1 1 0 0 0-1.42 0z"
                                        fill="currentColor"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </a>
                        </p>
                    </div>
                </section>
                <div id="ibe-home">
                    <section className="three-steps-module-ibe">
                        <div className="container inner-wrap-ibe">
                            <header className="section-header">
                                {/* <span class="ibe-new-tag btn_bg_xometry_blue">New!</span><br /> */}
                                <h2 className="section-header__primary instant-quote_heading">
                                    3 Ways to Find Suppliers and Get Quotes
                                </h2>
                            </header>
                            <div className="tsm-steps-wrap-ibe instant-quote">
                                <div className="tsm-item-ibe">
                                    <div className="tsmi-inner-wrap-ibe">
                                        <div className="tsmi-img-ibe">
                                            <img src="images/Ico-Find-Supplier.svg" />
                                        </div>
                                        <div className="tsmi-desc-ibe">
                                            <h4 className="font-size-md tsmi-heading-ibe">
                                                Discover Suppliers
                                            </h4>
                                            <p className="tsmi-text-ibe">
                                                Find and compare suppliers in over 70,000 categories. Our
                                                team keeps listings up to date and assists with strategic
                                                sourcing opportunities.
                                            </p>
                                            <a
                                                className="btn btn-primary btn-lg"
                                                href="/network/"
                                                target="_blank"
                                            >
                                                Search Suppliers
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tsm-item-ibe">
                                    <div className="tsmi-inner-wrap-ibe">
                                        <div className="tsmi-img-ibe">
                                            <img src="images/Ico-Instant-Quote.svg" />
                                        </div>
                                        <div className="tsmi-desc-ibe">
                                            <h4 className="font-size-md tsmi-heading-ibe">
                                                Get an Instant Quote{" "}
                                            </h4>
                                            <p className="tsmi-text-ibe">
                                                Upload a CAD model to get a quote within seconds for CNC
                                                machining, 3D printing, sheet metal fabrication, and more.
                                            </p>
                                            <a
                                                className="btn btn-primary btn-lg"
                                                href="/instantquote/"
                                                target="_blank"
                                            >
                                                Get an Instant Quote
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tsm-item-ibe">
                                    <div className="tsmi-inner-wrap-ibe">
                                        <div className="tsmi-img-ibe">
                                            <img src="images/ico-Register-as-Buyer.svg" />
                                        </div>
                                        <div className="tsmi-desc-ibe">
                                            <h4 className="font-size-md tsmi-heading-ibe">
                                                Register as a Buyer
                                            </h4>
                                            <p className="tsmi-text-ibe">
                                                Registered buyers can contact and quote with multiple
                                                suppliers, check out with a quote, and pay on terms within
                                                one platform.
                                            </p>
                                            <a
                                                className="btn btn-primary btn-lg"
                                                href="https://www.thomasnet.com/account/register"
                                                target="_blank"
                                            >
                                                Create an Account
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* End of ibe-home */}
                {/* buyers */}
                {/* End of buyers */}
                {/* suppliers */}
                {/* End of suppliers */}
                {/* latest-insights--inverted */}
                {/* Footer */}
                <footer className="bg-gray-900 text-white py-10" >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">About Us</h3>
                                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-center text-gray-400">
                            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
                <div className="cookie-banner__section inactive ">
                    <div className="cookie-banner__header">
                        <div className="cookie-banner__header-title">Cookie Policy</div>
                        <div className="gdpr-ico-close">
                            <svg
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon"
                            >
                                <title>Close</title>
                                <path
                                    d="M11.213 16L4.414 9.2a1 1 0 0 1 0-1.413l3.373-3.373a1 1 0 0 1 1.414 0l6.799 6.8 6.8-6.8a1 1 0 0 1 1.413 0l3.373 3.373a1 1 0 0 1 0 1.414L20.786 16l6.8 6.8a1 1 0 0 1 0 1.413l-3.373 3.373a1 1 0 0 1-1.414 0L16 20.786l-6.8 6.8a1 1 0 0 1-1.413 0l-3.373-3.373a1 1 0 0 1 0-1.414l6.8-6.799z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="cookie-banner__content">
                        Thomas uses cookies to ensure that we give you the best experience on
                        our website. By using this site, you agree to our{" "}
                        <a href="https://www.thomasnet.com/privacy.html" target="_blank">
                            Privacy Statement
                        </a>{" "}
                        and our{" "}
                        <a href="https://www.thomasnet.com/terms.html" target="_blank">
                            Terms of Use
                        </a>
                        .<br />
                        <span id="gdpr-btn-accept" className="btn btn-primary">
                            Accept
                        </span>
                    </div>
                </div>
                <div
                    className="modal fade modal--regwall"
                    id="regWall"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="regWallCenterTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <figure
                                className="reg-wall__logo ${hidden}"
                                data-optly-f15204b16a2840dcbdc1e73d845da4d5=""
                            >
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM0NC4xMyA2NS4zNSI+CiAgICA8dGl0bGU+VGhvbWFzIExvZ288L3RpdGxlPgogICAgPHBhdGggZmlsbD0iIzQ4YjJlOCIgZD0iTTAgMGg0MC44djEzLjZIMHoiIC8+CiAgICA8cGF0aCBmaWxsPSIjMDAzMzREIiBkPSJNMCAyNy4yaDEzLjZ2MzYuODdIMHpNMjcuMiAyNy4yaDEzLjZ2MzYuODdIMjcuMnpNOTIuMTggMzYuMDh2MjhIODEuOTV2LTI4SDcxLjYyVjI3LjJoMzAuODh2OC44OHpNMTM1LjY2IDY0LjA4VjQ5LjU1aC0xMS40OXYxNC41M2gtMTAuNDRWMjcuMmgxMC40M3YxMy40NGgxMS40OVYyNy4yaDEwLjQzdjM2Ljg4ek0xNzQuMzQgNjQuNjdjLTEwIDAtMTctNi42OS0xNy0xOXM3LjExLTE5LjA1IDE3LjExLTE5LjA1IDE3IDYuNjkgMTcgMTktNy4wOSAxOS4wNS0xNy4xMSAxOS4wNXptMC0yOS4xNGMtNC4xMSAwLTYuNDMgMy40My02LjQzIDEwLjA3czIuNDIgMTAuMTcgNi41NCAxMC4xNyA2LjQzLTMuNDMgNi40My0xMC4wNy0yLjQzLTEwLjE3LTYuNTQtMTAuMTd6TTIzMC4xMSA2NC4wOHYtOC44YzAtMy42NC4wNS03IC4yMS05LjgtMS4xMSAyLjc0LTMgNy00LjI3IDkuNjRsLTQuODUgMTAuMjItNC44NS0xMC4yMWMtMS4yNi0yLjY0LTMuMTYtNi45LTQuMjctOS42NC4xNiAyLjg1LjIxIDYuMTcuMjEgOS44djguNzloLTkuNTlWMjcuMmg5LjM4bDQuNTMgOS44OGE5OC41MSA5OC41MSAwIDAgMSA0LjY0IDExLjEgMTA1LjE4IDEwNS4xOCAwIDAgMSA0LjY0LTExLjFsNC41Ni05Ljg4aDkuMjh2MzYuODh6TTI3Ni4yNyA2NC4wOGwtMi02LjQ4SDI2My4ybC0yIDYuNDhoLTExbDEzLjM5LTM2Ljg5aDEwLjMzbDEzLjQyIDM2Ljg5em0tNS4xNi0xN2MtMS4zMi00Ljc0LTEuOS02Ljc1LTIuMzctOS4yMi0uNDcgMi40OC0xLjA1IDQuNTMtMi4zNyA5LjIybC0uNjkgMi40Mmg2LjExek0zMTIuMDEgNjQuNjdhMjkuNDEgMjkuNDEgMCAwIDEtMTUuNTYtNC40OGw1LThjMi42OSAxLjg0IDcuMzggMy42OSAxMC44IDMuNjkgMy42NCAwIDQuOC0uNjMgNC44LTIuMzcgMC0xLjM3LTEuMzItMi4yMS02LjI3LTMuMzctOC45MS0yLjA2LTEzLjE4LTQuNDgtMTMuMTgtMTEuODYgMC03IDUuNjQtMTEuNjUgMTQuNTUtMTEuNjUgNi4yNyAwIDEwLjggMS41MyAxNC43IDQuMjdsLTUgOGExNy44NyAxNy44NyAwIDAgMC0xMC4yOC0zLjQ4Yy0zLjA2IDAtMy43OS45NS0zLjc5IDIuMjdzMS4zMiAyIDYuMDYgMy4xMWM5LjI4IDIuMjEgMTMuMzkgNS4wNiAxMy4zOSAxMiAuMDEgOC4zOS02LjM3IDExLjg3LTE1LjIyIDExLjg3ek0zMzYuOCAyNy43MXY0LjUyaC0uNzl2LTQuNTJoLTEuNTZ2LS43OGgzLjg4di43OHpNMzQzLjM1IDMyLjIzdi0yLjgtLjkzYy0uMDYuMTUtLjIxLjUzLS4zNC44M2wtMS4yOSAzLTEuMjctM2MtLjEzLS4zLS4yOC0uNjgtLjM0LS44M3YzLjczaC0uNzV2LTUuM2guODJsMS4xOSAyLjgyYy4xMy4zLjI5LjY5LjM2LjkxLjA4LS4yMi4yMy0uNi4zNi0uOTFsMS4xNy0yLjgyaC44NXY1LjN6IiAvPgo8L3N2Zz4="
                                    className=""
                                />
                            </figure>
                            <div className="modal-header">
                                <h5 className="modal-title" id="regWall'LongTitle'">
                                    <b>Register or Sign-In to Continue</b>
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body "></div>
                            <div className="reg-wall__value-prop bg--gray-light">
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                >
                                    <title>ico-supplier</title>
                                    <path
                                        d="M18.354 5.9l4.83-1.294a1 1 0 0 1 1.224.707l3.624 13.523a1 1 0 0 1-.707 1.225l-8.774 2.35a7.35 7.35 0 0 0-7.075-3.542L8.953 9.454A1 1 0 0 1 9.66 8.23l4.83-1.295 1.035 3.864 3.864-1.035L18.354 5.9zM6.905 21.13L3.347 7.85l-1.932.517a1 1 0 0 1-1.224-.707l-.26-.966A1 1 0 0 1 .64 5.47l1.932-.517 1.932-.518a1 1 0 0 1 1.224.707L9.534 19.35a7.33 7.33 0 0 0-2.629 1.78zM19.34 24.27l9.47-2.537a1 1 0 0 1 1.224.707l.259.966a1 1 0 0 1-.707 1.225l-10.088 2.703a7.306 7.306 0 0 0-.158-3.064zm-9.566-3.11a5.59 5.59 0 1 1 4.942 10.028 5.59 5.59 0 0 1-4.942-10.027zm3.41 6.921a2.128 2.128 0 0 0 .968-2.846 2.128 2.128 0 0 0-2.847-.967 2.128 2.128 0 0 0-.967 2.846 2.128 2.128 0 0 0 2.846.967z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    />
                                </svg>{" "}
                                500,000+ Detailed Supplier Profiles
                                <br />
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                >
                                    <title>ico-white-paper-case-study</title>
                                    <g fill="currentColor" fillRule="evenodd">
                                        <path d="M24.026 10.301c.267.26.497.614.688 1.06.19.447.286.856.286 1.228v16.072c0 .372-.134.688-.401.948s-.592.391-.974.391H4.375c-.382 0-.707-.13-.974-.39A1.275 1.275 0 0 1 3 28.66V6.34c0-.373.134-.689.401-.95.267-.26.592-.39.974-.39h12.833c.382 0 .802.093 1.26.279.46.186.822.41 1.09.67l4.468 4.352zM6 9v6h6V9H6zm0 8v2h16v-2H6zm0 4v2h16v-2H6zm0 4v2h16v-2H6zm11.807-12.616V8.61a3.517 3.517 0 0 0-2.032.96 3.307 3.307 0 0 0 0 4.783c.681.66 1.575.99 2.468.99.894 0 1.787-.33 2.468-.99.57-.553.899-1.25.992-1.969h-3.896zm1.24-1.151h2.49a2.507 2.507 0 0 0-2.491-2.49v2.49z" />
                                        <path d="M27.167 26V12.293c0-.644-.153-1.297-.437-1.962-.282-.659-.643-1.216-1.098-1.659l-4.469-4.353c-.451-.44-1.013-.785-1.677-1.055-.664-.269-1.311-.412-1.944-.412H7v-.513c0-.372.134-.688.401-.948S7.993 1 8.375 1h11.917c.382 0 .802.093 1.26.279.458.186.821.41 1.089.67l5.385 5.278c.267.26.497.614.688 1.06.19.447.286.856.286 1.228v15.146c0 .372-.134.688-.401.948s-.592.391-.974.391h-.458z" />
                                    </g>
                                </svg>{" "}
                                300,000+ Articles &amp; Whitepapers
                                <br />
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                >
                                    <title>ico-product</title>
                                    <g fill="currentColor" fillRule="evenodd">
                                        <path d="M8.287 8.477a1.541 1.541 0 0 1 2.18-.017 1.54 1.54 0 0 1-.019 2.18c-.607.606-1.583.614-2.18.018a1.542 1.542 0 0 1 .019-2.18M6.005 6.195a3.21 3.21 0 0 1 2.248-.941l6.227-.059a3.868 3.868 0 0 1 2.783 1.15l12.549 12.55a2.198 2.198 0 0 1-.018 3.11l-7.987 7.986a2.197 2.197 0 0 1-3.11.018L6.148 17.462a3.868 3.868 0 0 1-1.15-2.783l.058-6.228c.008-.875.37-1.677.95-2.255zm15.314 7.648l-1.148.77a4.796 4.796 0 0 0-.786-.314l-.236-1.368a.302.302 0 0 0-.283-.22h-1.384a.302.302 0 0 0-.283.22l-.252 1.352a3.35 3.35 0 0 0-.77.33l-1.148-.802c-.094-.062-.268-.047-.362.047l-.96.96c-.094.094-.11.267-.046.362l.786 1.132a5.336 5.336 0 0 0-.346.818l-1.368.267c-.126 0-.236.142-.236.267l.016 1.368c0 .126.094.252.22.284l1.384.251c.063.283.189.535.314.786l-.77 1.148c-.079.11-.079.268.015.362l.976.975c.094.095.251.095.361.016l1.149-.77c.25.125.518.235.801.33l.252 1.352c.031.126.142.236.267.236h1.384a.27.27 0 0 0 .268-.236l.267-1.368c.267-.079.535-.189.802-.33l1.132.786c.095.063.268.047.346-.032l.975-.975c.094-.094.11-.267.048-.361l-.802-1.148c.125-.252.251-.504.33-.77l1.337-.268a.27.27 0 0 0 .235-.267l-.016-1.368c.016-.142-.094-.252-.22-.284l-1.352-.251a4.798 4.798 0 0 0-.315-.786l.77-1.149a.264.264 0 0 0-.03-.346l-.976-.975a.264.264 0 0 0-.346-.031z" />
                                        <path d="M19.977 20.338c-.999.999-2.652.999-3.65 0a2.583 2.583 0 0 1-.001-3.652 2.568 2.568 0 0 1 3.652 0 2.583 2.583 0 0 1 0 3.652" />
                                    </g>
                                </svg>{" "}
                                6 Million+ Industrial Products
                                <br />
                                <svg
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon"
                                >
                                    <title>ico-cad</title>
                                    <g fill="currentColor" fillRule="evenodd">
                                        <path d="M16.553 2.22L28.5 7.512 23.03 10.22l-6.668-2.66a.482.482 0 0 0-.413-.003l-6.59 2.663-5.6-2.708 11.985-5.293a1 1 0 0 1 .81 0zM8.638 21.82a.492.492 0 0 0 .114.163.79.79 0 0 0 .098.068l5.895 2.65v5.445l-11.09-5.283a1 1 0 0 1-.57-.903V9.432l5.51 2.778v9.427c.014.1.025.142.043.182z" />
                                        <path d="M15.094 17.1l-4.433 2.15v-6.775l4.433-2.149zM16.136 18.86l4.603 2.068-4.603 2.23-4.603-2.23z" />
                                        <path d="M28.71 24.892l-11.203 5.284V24.73l6.012-2.65a.52.52 0 0 0 .194-.19.567.567 0 0 0 .052-.168c.004-.03.006-3.19.008-9.483l5.51-2.777v14.525a1 1 0 0 1-.573.905z" />
                                        <path d="M21.605 12.475v6.774l-4.434-2.148v-6.775z" />
                                    </g>
                                </svg>{" "}
                                10 Million+ 2D &amp; 3D CAD Drawings
                            </div>
                            <div className="modal-footer mt-3 d-none">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mtg: site js should come from the cdn ci build */}
            <div id="div-gpt-ad-1614955491295-0"></div>
            <div id="sas_79741" />
        </>

    )
}

export default HelpPage