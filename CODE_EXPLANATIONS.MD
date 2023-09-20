## Preventing Image Stretching Behavior When Using Flex-Box

- The following tutorial showed me how to stop my image file from stretching weirdly when using flex-box for styling:
  - https://techstacker.com/how-to-prevent-image-stretching-with-flexbox/
- ## The following line of code helps to keep the image file with my picture from being stretched weirdly by flex-box.
      align-self: center;
  --

## Using named grid lines with CSS Grid

### Naming grid lines

- ## The line of code below, which ends with a semi-colon, names grid column lines 1 through 3, giving them the names "begin-edge," "halfway" and "end-edge" respectively.
  grid-template-columns:
  [begin-edge]
  minmax(22rem, 29rem)
  [halfway]
  minmax(19rem, 29rem)
  [end-edge];
  --

### Using named grid lines

--
grid-column: 2/3;
--

- The line of CSS code below uses line names instead of line numbers to specify the column in which the item(s) with the class of 'placeElsewhereInTheGrid' should be placed. It does the equivalent of the what the line of code above would do. The line of code above uses line numbers to specify the column in which the item(s) with the class of 'placeElsewhereInTheGrid' should be placed.

--
grid-column: halfway/end-edge;
--

## Using the span keyword within a grid-row property, in a CSS selector

--
grid-row: 3/3;
--

The line of code below does the same exact thing as the line of code above, which is commented out.

--
grid-row: 3 span;
--

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

--
h1 {
font-family: 'Nunito Sans', sans-serif;
font-weight: 1000;
}
--

## **Markdown Reference:** for editing documents with a md file extension.

- To get a basic idea of how to annotate reference text in a markdown file (a file with a md extension), I looked at the two resources below:
  - https://www.markdownguide.org/basic-syntax
  - https://blog.duckdocs.com/posts/using-nested-lists-and-sub-bullets-in-markdown

## CSS Box Shadows

- For more information about how to create box shadows using cascading style sheets, visit:

  - https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

- The line of code that follows defines what the line of text in the bulleted point below outlines:
  offset-x | offset-y | blur-radius | color

--
box-shadow: .4rem .5rem .3rem rgba(142, 172, 187, .2);
--

## Trimming Values from Data Captured from Form Fields

--
let name = getValueOfFormFieldAndTrimIt('usersName');
let email = getValueOfFormFieldAndTrimIt('usersEmail');
let message = getValueOfFormFieldAndTrimIt('usersMessage');
--

#### The code above does the same thing as the code below:

--
let name = getValueOfFormField('usersName');
name = name.trim();

let email = getValueOfFormField('usersEmail');
email = email.trim();

let message = getValueOfFormField('usersMessage');
message = message.trim();
--

## Default Browser Styles

- You can find a list of default browser styles for HTML elements here:
  - https://www.w3schools.com/cssref/css_default_values.php

## CSS Media Queries

- CSS media queries help to make the web-page or web-site responsive to different screen sizes. You can view the following guide, to learn more about how to use them:
  - https://css-tricks.com/a-complete-guide-to-css-media-queries/

## Accessible Headers on Main Navigation and on the Copyright Section

- Due to finding out that creating a header element for accessibility reasons, then hiding it from view using "display: none," actually made it so screen readers could not read the header either, I changed the method of hiding this header item to a different method.
- The new method involves making the font-size super small, setting visibility to hidden, then setting the top margin to a negative value, to compensate for extra space caused by the display of this header element.
- I also had the idea of hiding the text of this header from view, by making its color the same as the background color; since its sole purpose for existing is to make the website more accessible for blind people using screen readers. This would involve the following code being placed inside of the CSS selectors for the h4 element inside of the element with the copyright ID, as well as for the h2 elemen t inside of the element with the main-navigation ID:
  - color: #FAFAF0;

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
