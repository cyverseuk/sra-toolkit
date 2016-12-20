{
  "name"          : "sra-tools",
  "label"         : "sra-toolkit",
  "version"       : "0.0.0",
  "executionType" : "CLI",

  "executionSystem"  : "cyverseUK-Batch2",
  "deploymentSystem" : "cyverseUK-Storage2",
  "deploymentPath"  : "sratools/agave",
  "templatePath"    : "wrapper.sh",
  "testPath"        : "test.sh",
  "parallelism"     : "SERIAL",
  "shortDescription" : "Test for sra-toolkit",
  "longDescription"  : "Test for sra-toolkit",
  "helpURI" : "https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=software",
  "datePublished": "16. December 2016",
  "author" : "Annemarie Eckes",
  "tags": [ "testing"],
  "ontology": [ ],

  "inputs" : [ {
      "id": "input_1",
      "details" : {
        "label": "file with list of SRA Sequence IDs",
        "description": "list of SRA Sequence identifiers (SRR)"
        "argument":null
      },
      "value": {
        "required" : "true",
        "default" : "agave://data.iplantcollaborative.org/home/teatree/appexamples/Seq_names.txt",
        "visible":true
      },
      "semantics": {
        "minCardinality": 1,
	"maxCardinality": -1
      }
    }
  ],
  "outputs":[{
      "id":".sra,fastq"
      },
      "details":{
        "description" : "possible output files when using sra-tools, depending on the user command ",
        "argument" : null

  }]
}
