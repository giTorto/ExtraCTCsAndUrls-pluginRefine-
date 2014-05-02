(pluginRefine) Extraction E-mails, Telephone numbers, Urls and the Identification Numbers
======================================

This refine plugin allows the user to extract e-mails, urls and telephone numbers from a column in OpenRefine


##Installation
0. Compile the source code using ant build in the extension/plugin folder
0. Follow the steps at https://github.com/OpenRefine/OpenRefine/wiki/Installing-Extensions

## Usage
0. Open or create a project
0. Click the small triangle before the column name and choose *Extract e-mails,urls,etx...*
  0. Choose the interest operation
0. Click *Facet*
  0. Choose *custom text facet*
  0. Write *value.checkLuhn()*

## License
This extension is provided free of charge under the MIT license.
