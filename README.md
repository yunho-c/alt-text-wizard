# Drawing Board

Purpose
- I want them to think that my project is cool, and want to make them invested in the project to learn more, try, & contribute.

Important Questions
- What does this project have anything to do with them?
  - (If the answer is nothing: how can I make my project cool enough that unrelated people find it nice?)

Parts
- Catchy Intro
- Problem, Fundamental Principles, Results
- Traction
- Link to docs for testers, developers

#### Title
`auto-alt-text-wizard`

#### Description
Browser extension that generates alt text on-the-fly, powered by AI

---
<br/>
<br/>
<br/>



# Auto Alt Text Wizard

[`TODO`: catchy YouTube video that browses instagram with stunning details, words fading in as AI speaks]

Auto Alt Text Wizard (AATW) is a browser extension that generates accurate and descriptive [alt text]() on-the-fly, using latest innovations AI.  

All code runs locally and no data leaves your computer, as long as the system contains enough video RAM to load the vision-LLM engine (see [minimum requirement]()). 

If you want to learn more about how it works, read on!


## How it works

> (If you are not familiar with the machine learning terminologies, [this]() is a great resource to get started!)

This project consists of four main components:

- (**ML optimization & compilation pipeline** based on [Apache TVM]())
- **The OCR Engine** based on [PaddleOCR]() re-implemented using TVM
- **The Vision-LLM Engine** based on [LLaVA](), a multimodal large-language model derived from LLaMA 2
- **The actual browser extension** that scans the page to find images, runs the ML models, and adds the alt-text attribute tags 

## ML Optimization Pipeline



## OCR Engine



## Vision-LLM Engine

