import{_ as e,o as t,c as o,e as a}from"./app-Cl1f1E3W.js";const s={},i=a('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h1><blockquote><h1 id="preface" tabindex="-1"><a class="header-anchor" href="#preface"><span>Preface</span></a></h1></blockquote><blockquote><p>People have been writing programs for electronic computers for more than 80 years, but there has been surprisingly little conversation about how to design those programs or what good programs should look like. There has been considerable discussion about software development processes such as agile development and about development tools such as debuggers, version control systems, and test coverage tools. There has also been extensive analysis of programming techniques such as object-oriented programming and functional programming, and of design patterns and algorithms. All of these discussions have been valuable, but the core problem of software design is still largely untouched. David Parnas’ classic paper “On the Criteria to be used in Decomposing Systems into Modules” appeared in 1971, but the state of the art in software design has not progressed much beyond that paper in the ensuing 45 years.</p></blockquote><p>80 多年来，人们一直在为电子计算机编写程序，但令人惊讶的是，关于如何设计这些程序或什么是好的程序的讨论却很少。关于软件开发过程（如敏捷开发）和开发工具（如调试器、版本控制系统和测试覆盖工具）已经有了相当多的讨论。也对编程技术进行了广泛的分析，如面向对象编程和函数式编程以及设计模式和算法。所有这些讨论都是有价值的，但是软件设计的核心问题在很大程度上仍然没有触及。David Parnas 的经典论文“关于将系统分解成模块的标准”发表于 1971 年，但是在随后的 45 年里，软件设计的技术水平并没有超过这篇论文。</p><blockquote><p>The most fundamental problem in computer science is <em>problem decomposition</em>: how to take a complex problem and divide it up into pieces that can be solved independently. Problem decomposition is the central design task that programmers face every day, and yet, other than the work described here, I have not been able to identify a single class in any university where problem decomposition is a central topic. We teach for loops and object-oriented programming, but not software design.</p></blockquote><p>计算机科学中最基本的问题是<em>问题分解</em>：如何将一个复杂的问题分解为可以独立解决的部分。问题分解是程序员每天都要面对的首要设计任务，但是，除了这里描述的工作之外，我还没有在任何一所大学里找到一门以问题分解为中心的课程。我们讲授循环和面向对象的程序设计，而不是软件设计。</p><blockquote><p>In addition, there is a huge variation in quality and productivity among programmers, but we have made little attempt to understand what makes the best programmers so much better or to teach those skills in our classes. I have talked with several people I consider to be great programmers, but most of them had difficulty articulating specific techniques that give them their advantage. Many people assume that software design skill is an innate talent that cannot be taught. However, there is quite a bit of scientific evidence that outstanding performance in many fields is related more to high-quality practice than innate ability (see, for example, <em>Talent is Overrated</em> by Geoff Colvin).</p></blockquote><p>此外，程序员之间在质量和生产率上存在巨大差异，但是我们几乎没有尝试去了解什么能使最好的程序员变得更好，或者在我们的课堂上教授这些技能。我曾与几位我认为是优秀的程序员的人进行过交谈，但是他们中的大多数人都难以阐明赋予他们优势的特定技术。许多人认为软件设计技能是天生的天赋，无法教授。但是，有相当多的科学证据表明，许多领域的杰出表现更多地与高质量的实践有关，而不是与先天能力有关（例如，参阅 Geoff Colvin 的《<em>哪来的天才？练习中的平凡与伟大</em>》）。</p><blockquote><p>For many years these issues have perplexed and frustrated me. I have wondered whether software design can be taught, and I have hypothesized that design skill is what separates great programmers from average ones. I finally decided that the only way to answer these questions was to attempt to teach a course on software design. The result is CS 190 at Stanford University. In this class I put forth a set of principles of software design. Students then work through a series of projects to assimilate and practice the principles. The class is taught in a fashion similar to a traditional English writing class. In an English class, students use an iterative process where they write a draft, get feedback, and then rewrite to make improvements. In CS 190, students develop a substantial piece of software from scratch. We then go through extensive code reviews to identify design problems, and students revise their projects to fix the problems. This allows students to see how their code can be improved by applying design principles.</p></blockquote><p>多年来，这些问题使我感到困惑和沮丧。我想知道是否可以教授软件设计，并且我假设设计技巧是区分优秀程序员和普通程序员的原因。我最终决定，回答这些问题的唯一方法是尝试教授软件设计课程。结果就是斯坦福大学的 CS 190 课程。在这个课程中，我提出了一套软件设计原则。然后，学生将通过一系列项目来吸收和实践这些原理。该课程的授课方式类似于传统的英语写作课。在英语课堂上，学生使用迭代的过程，在过程中编写草稿、获取反馈、然后重写以进行改进。在 CS 190 中，学生从头开始开发大量软件。然后，我们将进行大量的代码审查以识别设计问题，然后学生修改其项目以解决这些问题。这使学生可以了解如何通过应用设计原理来改进其代码。</p><blockquote><p>I have now taught the software design class three times, and this book is based on the design principles that emerged from the class. The principles are fairly high level and border on the philosophical (“Define errors out of existence”), so it is hard for students to understand the ideas in the abstract. Students learn best by writing code, making mistakes, and then seeing how their mistakes and the subsequent fixes relate to the principles.</p></blockquote><p>到现在，我已经教过 3 次软件设计课程，并且本书是基于该课程中出现的设计原理编写的。这些原则立足于比较高的层级，类似于哲学概念（比如“通过定义来规避错误”），因此学生很难以抽象的方式理解这些思想。通过编写代码、犯错误、然后查看他们的错误以及后续的修正与这些原则之间的关系，学生将学得最好。</p><blockquote><p>At this point you may well be wondering: what makes me think I know all the answers about software design? To be honest, I don’t. There were no classes on software design when I learned to program, and I never had a mentor to teach me design principles. At the time I learned to program, code reviews were virtually nonexistent. My ideas about software design come from personal experience writing and reading code. Over my career I have written about 250,000 lines of code in a variety of languages. I’ve worked on teams that created three operating systems from scratch, multiple file and storage systems, infrastructure tools such as debuggers, build systems, and GUI toolkits, a scripting language, and interactive editors for text, drawings, presentations, and integrated circuits. Along the way I’ve experienced firsthand the problems of large systems and experimented with various design techniques. In addition, I’ve read a considerable amount of code written by other people, which has exposed me to a variety of approaches, both good and bad.</p></blockquote><p>在这一点上，您可能会想知道：是什么让我认为我知道有关软件设计的所有答案？老实说，我没有。当我学会编程时，也没有关于软件设计的课程，而且我从来没有导师来教我设计原理。在我学习编程时，代码审查还不存在。我对软件设计的想法来自于编写和阅读代码的个人经验。在我的职业生涯中，我已经用多种语言编写了大约 25 万行代码。我曾在一些团队中工作过，这些团队从零开始创建了三个操作系统、多个文件和存储系统、基础架构工具（例如调试器、构建系统和图像界面工具包）、一种脚本语言以及用于文本、图形、演示文稿和集成电路的交互式编辑器。一路上，我亲身经历了大型系统的问题，并尝试了各种设计技术。另外，我已经阅读了很多其他人编写的代码，这使我接触到了很多方法，无论是好是坏。</p><blockquote><p>Out of all of this experience, I’ve tried to extract common threads, both about mistakes to avoid and techniques to use. This book is a reflection of my experiences: every problem described here is one that I have experienced personally, and every suggested technique is one that I have used successfully in my own coding.</p></blockquote><p>从所有这些经验中，我尝试提取通用线索，包括需要避免的错误和使用的技巧。本书反映了我的经验：这里描述的每个问题都是我亲身经历的，每种建议的技术都是我在自己的编码中成功使用过的。</p><blockquote><p>I don’t expect this book to be the final word on software design; I’m sure there are valuable techniques that I’ve missed, and some of my suggestions may turn out to be bad ideas in the long run. However, I hope that the book will start a conversation about software design. Compare the ideas in this book with your own experiences and decide for yourself whether the approaches described here really do reduce software complexity. This book is an opinion piece, so some readers will disagree with some of my suggestions. If you do disagree, try to understand why. I’m interested in hearing about things that work for you, things that don’t work, and any other ideas you may have about software design. I hope that the ensuing conversations will improve our collective understanding of software design. I will incorporate what I learn in future editions of this book.</p></blockquote><p>我不希望这本书成为软件设计的定论。我敢肯定，我错过了一些有价值的技术，从长远来看，我的一些建议可能会变成坏主意。但是，我希望本书能开始有关软件设计的对话。将本书中的想法与您自己的经验进行比较，并自己决定此处介绍的方法是否确实降低了软件复杂性。这是一本呈现我个人观点的书，所以有些读者会不同意我的一些建议。如果您不同意，请尝试理解原因在哪。我有兴趣了解对您有用的东西、不起作用的东西以及您可能对软件设计有的任何其他想法。我希望随后的对话将增进我们对软件设计的集体理解。</p><blockquote><p>The best way to communicate with me about the book is to send email to the following address:</p></blockquote><p>与我交流这本书的最好方法是将电子邮件发送到以下地址：</p><p><a href="mailto:software-design-book@googlegroups.com">software-design-book@googlegroups.com</a></p><blockquote><p>I’m interested in hearing specific feedback about the book, such as bugs or suggestions for improvement, as well as general thoughts and experiences related to software design. I’m particularly interested in compelling examples that I can use in future editions of the book. The best examples illustrate an important design principle and are simple enough to explain in a paragraph or two. If you would like to see what other people are saying on the email address and participate in discussions, you can join the Google Group <code>software-design-book</code>.</p></blockquote><p>我有兴趣听到有关本书的反馈，例如缺陷或改进建议，以及与软件设计相关的通用思想和经验。我对可以在本书未来版本中使用的引人注目的示例特别感兴趣。最好的示例能说明重要的设计原理，并且足够简单，可以在一两个段落中进行解释。如果您想在电子邮件地址上看到其他人在说什么并参与讨论，可以加入 Google Group <code>software-design-book</code>。</p><blockquote><p>If for some reason the <code>software-design-book</code> Google Group should disappear in the future, search on the Web for my home page; it will contain updated instructions for how to communicate about the book. Please don’t send book-related email to my personal email address.</p></blockquote><p>如果出于某种原因 Google Group <code>software-design-book</code> 将来会消失，请在互联网上搜索我的主页，它将包含有关如何与这本书进行交流的更新说明。请不要将与图书相关的电子邮件发送到我的个人电子邮件地址。</p><blockquote><p>I recommend that you take the suggestions in this book with a grain of salt. The overall goal is to reduce complexity; this is more important than any particular principle or idea you read here. If you try an idea from this book and find that it doesn’t actually reduce complexity, then don’t feel obligated to keep using it (but, do let me know about your experience; I’d like to get feedback on what works and what doesn’t).</p></blockquote><p>我建议您使用本书建议时持保留态度。总体目标是降低复杂性，这比您在此处阅读的任何特定原理或想法更为重要。如果您尝试从本书中获得一个想法并发现它实际上并没有降低复杂性，那么您就不必继续使用它（但是，请让我知道您的经历，不管方法有效还是无效，我都想获得相关的反馈意见）。</p><blockquote><p>Many people have offered criticisms or made suggestions that improved the quality of the book. The following people offered helpful comments on various drafts of the book: Jeff Dean, Sanjay Ghemawat, John Hartman, Brian Kernighan, James Koppel, Amy Ousterhout, Kay Ousterhout, Rob Pike, Partha Ranganathan, Keith Schwartz, and Alex Snaps. Christos Kozyrakis suggested the terms “deep” and “shallow” for classes and interfaces, replacing previous terms “thick” and “thin”, which were somewhat ambiguous. I am indebted to the students in CS 190; the process of reading their code and discussing it with them has helped to crystallize my thoughts about design.</p></blockquote><p>许多人提出了批评或建议，以提高本书的质量。以下人员对本书的各种草稿提供了有用的意见：Jeff Dean，Sanjay Ghemawat，John Hartman，Brian Kernighan，James Koppel，Amy Ousterhout，Kay Ousterhout，Rob Pike，Partha Ranganathan，Keith Schwartz 和 Alex Snaps。Christos Kozyrakis 为类和接口建议了术语“深”和“浅”，代替了之前有点模糊的术语“厚”和“薄”。我很感激 CS 190 中的学生，阅读他们的代码并与他们讨论的过程有助于明确我对设计的想法。</p>',29),n=[i];function r(h,d){return t(),o("div",null,n)}const c=e(s,[["render",r],["__file","preface.html.vue"]]),p=JSON.parse('{"path":"/preface.html","title":"前言","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1710121838000},"filePathRelative":"preface.md"}');export{c as comp,p as data};
