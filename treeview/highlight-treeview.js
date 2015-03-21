/**
 * Treeview syntax highlighting based on highlight.js
 * Copyright (c) 2014-2015, Asciidocfx Team, (MIT Licensed)
 * https://github.com/asciidocfx/highlight-treeview.js
 */
hljs.registerLanguage('treeview', function(hljs) {
  return {
    contains: [
      {
        className : 'folder-last-branch win',
        begin : /(\\|\└)(\-|\─){3}/,
        relevance : 0
      },
      { 
        className : 'folder-last-branch',
        begin : /(\`|\└)(\-|\─){2}/,
        relevance : 0
      },
      {
        className : 'folder-branch win',
        begin : /(\-|\─){3}/,
        relevance : 0
      },
      { 
        className : 'folder-branch',
        begin : /(\-|\─){2}/,
        relevance : 0
      },
      {
        className : 'tvline',
        begin : /\||\¦|\│|\+|\├/,
        relevance : 0
      },
      {
        className : 'hiddenfile',
        begin : /\..+/,
        relevance : 0
      },
      {
        className : 'file plain',
        begin : /[^ \n\t  ].+\.(epub(3)?|mobi|azw(3)?|cfg|conf(ig)?|sh|bat|csv|ini|log|md|markdown|info|txt|asc(iidoc)?|ad(oc)?|tex|pom|properties|lst|project|iml)$/,
        relevance : 0
      },
      {
        className : 'file video',
        begin : /[^ \n\t  ].+\.(cda|avi|flv|mkv|mov|mp4|mpeg|mpg|ogv|webm|divx|wmv)$/,
        relevance : 0
      },
      {
        className : 'file source',
        begin : /[^ \n\t  ].+\.(asp(x)?|c(pp|c|s(s)?|lass)?|h(tm(l)?|(h)?)|jav(a)?|js(on)?|aj|php|rb|xml|yml)$/,
        relevance : 0
      },
      {
        className : 'file photo',
        begin : /[^ \n\t  ].+\.(bmp|eps|gif|jpg|jpe(g)?|png|svg|tif(f)?|ico|tga|targa|j2(k|c)|jng)$/,
        relevance : 0
      },
      {
        className : 'file audio',
        begin : /[^ \n\t  ].+\.(aac|au|cda|flac|mp(3|2)|oga|ogg|wav|wma|flac|ac3|mac)$/,
        relevance : 0
      },
      {
        className : 'file archive',
        begin : /[^ \n\t  ].+\.(7z|bz(2)?|gz|rar|tar|tgz|zip|repo|jar)$/,
        relevance : 0
      },
      {
        className : 'file pdf',
        begin : /[^ \n\t  ].+\.(pdf)$/,
        relevance : 0
      },
      {
        className : 'file xls',
        begin : /[^ \n\t  ].+\.(xls(x)?)$/,
        relevance : 0
      },
      {
        className : 'file doc',
        begin : /[^ \n\t  ].+\.(doc(m|x)?)$/,
        relevance : 0
      },
      {
        className : 'file ppt',
        begin : /[^ \n\t  ].+\.(pps|ppt(x)?)$/,
        relevance : 0
      },
      {
        className : 'file plain',
        begin : /(readme|README|LICENSE|license|CNAME)$/,
        relevance : 0
      },
      {
        className: 'folder',
        begin: /[^ \n\t  ].+(\/)?/,
        relevance : 0
      }
    ]
  };
});
