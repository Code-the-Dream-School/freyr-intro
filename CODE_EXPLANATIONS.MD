## Google Fonts

- For frequently asked questions about Google fonts, you may visit the following website:
  - https://developers.google.com/fonts/faq
- Fon information about variable fonts, you may visit the following website:
  - https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts
- I found custom fonts to use in this website project by visiting:
  - https://fonts.google.com/
- I watched the following YouTube tutorial to learn new changes to the process of adding a Google web font to the stylesheet, for styling the text in my HTML code:
- [How to Add Google Font to HTML Website] (https://youtu.be/iIqgW-stZmE)

The weights that could be available for the 'Nunito Sans' font, for this project, using the code below are: 200 (extra light), 200 italic, 400 (regular), 400 italic, 700 (bold), 700 italic, 1000 (extra bold) and 1000 italic.

### **Sample HTML Code:** for utilizing this hosted Google font through CSS.

> <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,400;0,6..12,700;0,6..12,1000;1,6..12,200;1,6..12,400;1,6..12,700;1,6..12,1000&family=Poppins:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap" rel="stylesheet">

### **Sample CSS Code:** for utilizing this hosted Google font.

> h1 {
> font-family: 'Nunito Sans', sans-serif;
> font-weight: 1000;
> }

## **Markdown Reference:** for editing documents with a md file extension.

- To get a basic idea of how to annotate reference text in a markdown file (a file with a md extension), I looked at the two resources below:
  - https://www.markdownguide.org/basic-syntax
  - https://blog.duckdocs.com/posts/using-nested-lists-and-sub-bullets-in-markdown

## DOM Manipulation

- For assistance with DOM Manipulation, I used the following resources:

  - ### Team Tree House Course Modules:

    - JavaScript and the DOM
      - https://teamtreehouse.com/library/javascript-and-the-dom-3
    - DOM Scripting by Example
      - https://teamtreehouse.com/library/dom-scripting-by-example

  - ### Traversing the DOM with JavaScript

    - https://zellwk.com/blog/dom-traversals/

  - ### Adding text and HTML

    - innerHTML property
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    - innerText property
    - https://www.w3schools.com/Jsref/prop_node_innertext.

  - ### Appending or prepending nodes

    - #### HTML DOM Element appendChild()
      - https://www.w3schools.com/jsref/met_node_appendchild.asp

  - ### JavaScript prepend or element prepend() method

    - https://www.javascripttutorial.net/javascript-dom/javascript-prepend/
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  - ### JavaScript append or element append() method

    - https://www.javascripttutorial.net/javascript-dom/javascript-append/
    - https://developer.mozilla.org/en-US/docs/Web/API/Element/append

  - ### **Attributes:** getting, setting and removing them

    - #### **Element:** getAttribute() method

      - https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute

    - #### **Element:** setAttribute() method

      - https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

    - #### **Node:** textContent property

      - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

    - #### removeAttribute
      - ##### JavaScript removeAttribute or element removeAttribute() method
        - https://www.javascripttutorial.net/javascript-dom/javascript-removeattribute/
        - https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute

  - #### HTML DOM Document createElement() or document createElement() methodDocument

    - https://www.w3schools.com/jsref/met_document_createelement.asp
    - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  - #### Events

    - ##### **eventTarget:** target event property

      - https://www.devhandbook.com/javascript/dom/event-target/
      - https://developer.mozilla.org/en-US/docs/Web/API/Event/target
      - https://www.w3schools.com/jsref/event_target.asp

    - ##### **preventDefault**

      - https://www.w3schools.com/jsref/event_preventdefault.asp
      - https://www.geeksforgeeks.org/preventdefault-event-method/

    - ##### reset form

      - https://electrictoolbox.com/javascript-reset-html-form/
      - https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript
      - https://www.w3schools.com/jsref/met_form_reset.asp

    - ##### HTML DOM Document addEventListener()
      - https://www.w3schools.com/jsref/met_document_addeventlistener.asp
      - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
      - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
      - https://forum.freecodecamp.org/t/how-works-event-target-value/230553

  - #### HTML Collection and NodeList

    - ##### HTMLCollection
      - https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
    - ##### NodeList
      - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
    - ##### Difference between HTMLCollection and NodeList
      - https://dev.to/jharteaga/difference-between-htmlcollection-and-nodelist-25bp

  - #### Removing Element or Node

    - ##### **Element:** remove() method
      - https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
      - https://www.w3schools.com/jsref/met_node_removechild.asp

  - #### Selectors

    - ##### Locating DOM elements using selectors

      - https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

      - ###### HTML DOM Document querySelector()

        - https://www.w3schools.com/jsref/met_document_queryselector.asp
        - https://www.w3schools.com/jsref/met_element_queryselector.asp
        - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

      - ###### HTML DOM Document getElementById()

        - https://www.w3schools.com/jsref/met_document_getelementbyid.

      - ###### HTML DOM Document getElementsByClassName()

        - Please note that this method returns an array like list, as opposed to a single element.
        - https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

      - ###### getElementsByTagName()

        - Please note that this method returns an array like list, as opposed to a single element.
        - https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp

      - ###### HTML DOM Document querySelectorAll()
        - Please note that this method returns an array like list, as opposed to a single element.
        - https://www.w3schools.com/jsref/met_document_queryselectorall.asp
        - https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

  - ##### Styling within JavaScript

    - ###### HTMLElement: style property

      - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/

    - ###### CSSStyleDeclaration

      - https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

    - ###### HTML DOM Element style
      - https://www.w3schools.com/jsref/prop_html_style.asp

  - ##### JavaScript HTML DOM Elements (Nodes)

    - https://www.w3schools.com/js/js_htmldom_nodes.asp

    - ###### parentNode

      - https://www.w3schools.com/jsref/prop_node_parentnode.asp

      - https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode

      - https://www.javascripttutorial.net/javascript-dom/javascript-get-parent-element-parentnode/

  - ##### Accessibility with HTMl and JavaScript
    - To see how this applies to JavaScript, you have to scroll down the following web-page a bit:
      - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
