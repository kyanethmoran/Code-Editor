// CONSTANTS FOR LANGUAGE SELECTOR *update later to get dynamically incase versions change and differ from what is hard coded*
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

// CONSTANTS FOR LANGUAGE OPTION BOILERPLATE
export const CODE_SNIPPETS = {
  javascript: `//Type Your Code Here...\nfunction greet(name) {\n\tconsole.log("Hello, " + name + " in JS!");\n}\n\ngreet("World");\n`,

  typescript: `//Type Your Code Here...\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + " in TS!");\n}\n\ngreet({name: "World" });\n`,

  python: `#Type Your Code Here...\ndef greet(name):\n\tprint("Hello, " + name + " in Python!")\n\ngreet("World")\n`,

  java: `//Type Your Code Here..\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World in Java!");\n\t}\n}\n`,

  csharp:
    '//Type Your Code Here...\nusing System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#!");\n\t\t}\n\t}\n}\n',

  php: "<?php\n//Type Your Code Here...\n\n$name = 'Hello World in PHP!';\necho $name;\n",
};
