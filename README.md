# General Information About the Tool

The tool helps to provide language support to your applications. Thanks to the JSON output it gives, it is possible to use it in all your projects. Currently only CLI supports it. The tool is used to provide language support to Sci-Hook systems and is regularly updated by the Sci-Hook Development Team.

# How to Install the Tool?

It is possible to install the package directly to your project folder via npm. For this, you must come to the terminal where you run your project and run the npm install command below:

`$ npm install localizer-js`

After running the command, the latest version of the package will automatically start downloading to the "node_modules" folder. Please wait until npm service completes the process.

# How to Use the Tool?

The tool has been developed to be very easy and fast to use. You can start using it by typing `localize` on the command line.

`$ localize compile`

It is ensured that the inputs given with the above-mentioned command are compiled as a single file. The command takes a parameter specified as `--config` or `-c`. Below is an example of this:
`$ localize compile --config config.json`

The command you see above performs the compilation process with the information it receives from the `config.json` file specified in the `--config` parameter.

### config.json

```json
{
    "langs": [
        "en",
        "tr"
    ],
    "input-dir": "i18n",
    "output-file": "output.json",
    "files": {
        "messages": "messages",
        "text": "text"
    },
    "global": true
}
```

An example of configuration is given above.

| Options | Description                 |
| ------------- | ------------------------------ |
| `langs`      | It is a list of languages requested as output.      |
| `input-dir`   | It is the file that contains the values given as input to the system.     |
| `output-file`   | It is the file that the system gives output in compiled form.     |
| `global`   | Commonly assigned values for all languages.     |

Below is an example image of a file structure created for `input-dir`:

![](https://raw.githubusercontent.com/Sci-Hook/localizer-js/main/.github/images/example-image-1.png)

A folder has been created for `messages` and `text` mentioned in `files` above, and a JSON file for each language has been added to the folders.

The `en.json` and `tr.json` files are assigned values as follows:

### en.json

```json
{
    "test": "hello"
}
```

### tr.json

```json
{
    "test": "merhaba"
}
```

## Getting Output

`$ localize compile --config config.json`

When you run the above command, the JSON file specified in the `output-file` option specified in `config.json` is output. The output looks like this:

### output.json

```json
{
    "en": {
        "text": {
            "test": "hello"
        }
    },
    "tr": {
        "text": {
            "test": "merhaba"
        }
    }
}
```

# Contributors

This software package is developed and provided by the Sci-Hook Organization. It is actively developed by [Emirhan Gerçeker](https://github.com/lim10tech).

# License

This package is made available as open-source under the [MIT License](https://github.com/Sci-Hook/language-accepter/blob/main/LICENSE). It is open for development, modification and free use. You can use the package in your personal or organizational projects, you don't need permission from anywhere. Attribution to the developers and Sci-Hook is appreciated but not legally required.
