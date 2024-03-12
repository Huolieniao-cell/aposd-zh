import{_ as r,r as n,o as l,c as h,a as e,d as t,b as a,w as i,e as s}from"./app-CBNg9m_e.js";const c={},p=s('<h1 id="第-8-章-降低复杂性" tabindex="-1"><a class="header-anchor" href="#第-8-章-降低复杂性"><span>第 8 章 降低复杂性</span></a></h1><blockquote><p>Chapter 8 Pull Complexity Downwards</p></blockquote><blockquote><p>This chapter introduces another way of thinking about how to create deeper classes. Suppose that you are developing a new module, and you discover a piece of unavoidable complexity. Which is better: should you let users of the module deal with the complexity, or should you handle the complexity internally within the module? If the complexity is related to the functionality provided by the module, then the second answer is usually the right one. Most modules have more users than developers, so it is better for the developers to suffer than the users. As a module developer, you should strive to make life as easy as possible for the users of your module, even if that means extra work for you. Another way of expressing this idea is that <strong>it is more important for a module to have a simple interface than a simple implementation</strong>.</p></blockquote><p>本章介绍了有关如何创建更深的类的另一种思考方式。假设您正在开发一个新模块，并且发现了一个不可避免的复杂性。那么，是应该让模块的使用者处理复杂性，还是应该在模块内部处理复杂性？如果复杂性与模块提供的功能有关，则第二个答案通常是正确的答案。大多数模块的使用者会多于其开发人员，因此麻烦开发人员比麻烦使用者更好。作为模块开发人员，您应该努力使模块使用者的生活尽可能轻松，即使这对您来说意味着额外的工作。表达此想法的另一种方式是，<strong>让模块的接口简单比让其实现简单更为重要</strong>。</p><blockquote><p>As a developer, it’s tempting to behave in the opposite fashion: solve the easy problems and punt the hard ones to someone else. If a condition arises that you’re not certain how to deal with, the easiest thing is to throw an exception and let the caller handle it. If you are not certain what policy to implement, you can define a few configuration parameters to control the policy and leave it up to the system administrator to figure out the best values for them.</p></blockquote><p>作为开发人员，很容易以相反的方式行事：解决简单的问题，然后将困难的问题推给其他人。如果出现不确定如何处理的情况，最简单的方法是抛出异常并让调用者处理它。如果不确定要实施什么策略，则可以定义一些配置参数来控制该策略，然后由系统管理员自行确定最佳策略。</p><blockquote><p>Approaches like these will make your life easier in the short term, but they amplify complexity, so that many people must deal with a problem, rather than just one person. For example, if a class throws an exception, every caller of the class will have to deal with it. If a class exports configuration parameters, every system administrator in every installation will have to learn how to set them.</p></blockquote><p>这样的方法短期内会使您的生活更轻松，但它们会加剧复杂性，因为许多人都必须处理一个问题，而不仅仅是一个人。例如，如果一个类抛出异常，则该类的每个调用者都必须处理该异常。如果一个类导出配置参数，则每个系统管理员在每次安装中都必须学习如何设置它们。</p><h2 id="_8-1-示例-编辑器文本类" tabindex="-1"><a class="header-anchor" href="#_8-1-示例-编辑器文本类"><span>8.1 示例：编辑器文本类</span></a></h2><blockquote><p>8.1 Example: editor text class</p></blockquote><blockquote><p>Consider the class that manages the text of a file for a GUI text editor, which was discussed in Chapters 6 and 7. The class provides methods to read a file from disk into memory, query and modify the in-memory copy of the file, and write the modified version back to disk. When students had to implement this class, many of them chose a line-oriented interface, with methods to read, insert, and delete whole lines of text. This resulted in a simple implementation for the class, but it created complexity for higher level software. At the level of the user interface, operations rarely involve whole lines. For example, keystrokes cause individual characters to be inserted within an existing line; copying or deleting the selection can modify parts of several different lines. With the line-oriented text interface, higher-level software had to split and join lines in order to implement the user interface.</p></blockquote>',11),u=e("blockquote",null,[e("p",null,"A character-oriented interface such as the one described in Section 6.3 pulls complexity downward. The user interface software can now insert and delete arbitrary ranges of text without splitting and merging lines, so it becomes simpler. The implementation of the text class probably becomes more complex: if it represents the text internally as a collection of lines, it will have to split and merge lines to implement the character-oriented operations. This approach is better because it encapsulates the complexity of splitting and merging within the text class, which reduces the overall complexity of the system.")],-1),d=s('<h2 id="_8-2-示例-配置参数" tabindex="-1"><a class="header-anchor" href="#_8-2-示例-配置参数"><span>8.2 示例：配置参数</span></a></h2><blockquote><p>8.2 Example: configuration parameters</p></blockquote><blockquote><p>Configuration parameters are an example of moving complexity upwards instead of down. Rather than determining a particular behavior internally, a class can export a few parameters that control its behavior, such as the size of a cache or the number of times to retry a request before giving up. Users of the class must then specify appropriate values for the parameters. Configuration parameters have become very popular in systems today; some systems have hundreds of them.</p></blockquote><p>配置参数是提高复杂性而不是降低复杂性的一个示例。类可以输出一些控制其行为的参数，而不是在内部确定特定的行为，例如高速缓存的大小或在放弃之前重试请求的次数。然后，该类的使用者必须为参数指定适当的值。在当今的系统中，配置参数已变得非常流行，有些系统有数百个配置参数。</p><blockquote><p>Advocates argue that configuration parameters are good because they allow users to tune the system for their particular requirements and workloads. In some situations it is hard for low-level infrastructure code to know the best policy to apply, whereas users are much more familiar with their domains. For instance, a user might know that some requests are more time-critical than others, so it makes sense for the user to specify a higher priority for those requests. In situations like this, configuration parameters can result in better performance across a broader variety of domains.</p></blockquote><p>配置参数的拥护者认为配置参数不错，因为它们允许用户根据他们的特定要求和工作负载来调整系统。在某些情况下，低层级的基础结构代码很难知道要应用的最佳策略，而用户则对其领域更加熟悉。例如，用户可能知道某些请求比其他请求更紧迫，因此用户为这些请求指定更高的优先级是有意义的。在这种情况下，配置参数可以在更广泛的领域中带来更好的性能。</p><blockquote><p>However, configuration parameters also provide an easy excuse to avoid dealing with important issues and pass them on to someone else. In many cases, it’s difficult or impossible for users or administrators to determine the right values for the parameters. In other cases, the right values could have been determined automatically with a little extra work in the system implementation. Consider a network protocol that must deal with lost packets. If it sends a request but doesn’t receive a response within a certain time period, it resends the request. One way to determine the retry interval is to introduce a configuration parameter. However, the transport protocol could compute a reasonable value on its own by measuring the response time for requests that succeed and then using a multiple of this for the retry interval. This approach pulls complexity downward and saves users from having to figure out the right retry interval. It has the additional advantage of computing the retry interval dynamically, so it will adjust automatically if operating conditions change. In contrast, configuration parameters can easily become out of date.</p></blockquote><p>但是，配置参数还提供了一个轻松的借口，可以用来避免处理重要的问题并将其传递给其他人。在许多情况下，用户或管理员很难或无法确定参数的正确值。在其他情况下，可以通过在系统实现中进行一些额外的工作来自动确定正确的值。考虑一个必须处理丢失数据包的网络协议。如果它发送了请求但在一定时间内未收到响应，则重新发送该请求。确定重试间隔的一种方法是引入配置参数。但是，传输协议可以通过测量成功请求的响应时间，并将该响应时间的倍数用于重试间隔，自己计算出一个合理的值。这种方法降低了复杂性，使其用户不必自行找出正确的重试间隔。它还具有动态计算重试间隔的额外优点，因此，如果操作条件发生变化，它将自动进行调整。相反，配置参数很容易就过时了。</p><blockquote><p>Thus, you should avoid configuration parameters as much as possible. Before exporting a configuration parameter, ask yourself: “will users (or higher-level modules) be able to determine a better value than we can determine here?” When you do create configuration parameters, see if you can compute reasonable defaults automatically, so users will only need to provide values under exceptional conditions. Ideally, each module should solve a problem completely; configuration parameters result in an incomplete solution, which adds to system complexity.</p></blockquote><p>因此，您应尽可能避免使用配置参数。在导出配置参数之前，请问自己：“用户（或更高层级的模块）是否能够确定一个比我们在这里确定的更好的值？” 当您创建配置参数时，请确认是否可以自动计算合理的默认值，以便用户仅需在特殊情况下提供这个值。理想情况下，每个模块都应完整地解决一个问题。而配置参数导致的是一个不完整的解决方案，从而增加了系统复杂性。</p><h2 id="_8-3-做过头了" tabindex="-1"><a class="header-anchor" href="#_8-3-做过头了"><span>8.3 做过头了</span></a></h2><blockquote><p>8.3 Taking it too far</p></blockquote><blockquote><p>Use discretion when pulling complexity downward; this is an idea that can easily be overdone. An extreme approach would be to pull all of the functionality of the entire application down into a single class, which clearly doesn’t make sense. Pulling complexity down makes the most sense if (a) the complexity being pulled down is closely related to the class’s existing functionality, (b) pulling the complexity down will result in many simplifications elsewhere in the application, and (c) pulling the complexity down simplifies the class’s interface. Remember that the goal is to minimize overall system complexity.</p></blockquote><p>降低复杂性时要谨慎处理；这个想法很容易做过头。一种极端的方法是将整个应用程序的所有功能归为一个类，这显然没有意义。如果（a）被降低的复杂性与该类的现有功能密切相关，（b）降低复杂性将导致应用程序中许多其他地方的简化，则降低复杂性最有意义。简化了类的接口。请记住，目标是最大程度地降低整体的系统复杂性。</p><blockquote><p>Chapter 6 described how some students defined methods in the text class that reflected the user interface, such as a method that implements the functionality of the backspace key. It might seem that this is good, since it pulls complexity downward. However, adding knowledge of the user interface to the text class doesn’t simplify higher-level code very much, and the user-interface knowledge doesn’t relate to the core functions of the text class. In this case, pulling complexity down just resulted in information leakage.</p></blockquote>',15),m=e("h2",{id:"_8-4-结论",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_8-4-结论"},[e("span",null,"8.4 结论")])],-1),f=e("blockquote",null,[e("p",null,"8.4 Conclusion")],-1),y=e("blockquote",null,[e("p",null,"When developing a module, look for opportunities to take a little bit of extra suffering upon yourself in order to reduce the suffering of your users.")],-1),b=e("p",null,"在开发模块时，为了减少用户的痛苦，要找机会给自己多吃一点苦。",-1);function g(w,v){const o=n("RouteLink");return l(),h("div",null,[p,e("p",null,[t("考虑为图像界面文本编辑器管理文件文本的类，这在 "),a(o,{to:"/ch06.html"},{default:i(()=>[t("第 6 章")]),_:1}),t(" 和 "),a(o,{to:"/ch07.html"},{default:i(()=>[t("第 7 章")]),_:1}),t(" 中讨论过。该类提供了将文件从磁盘读入内存、查询和修改文件在内存中的副本以及将修改后的版本写回磁盘的方法。当学生们要实现这个类时，许多人选择了面向行的接口，该接口具有读取、插入和删除整行文本的方法。这导致了类实现起来很简单，但也为更高层级的软件带来了复杂性。在用户界面的层级，很少涉及整行操作。例如，击键会导致在现有行中插入单个字符；复制或删除选择的区域可能同时修改几个不同的行。使用面向行的文本接口，更高层级的软件必须自行拆分和连接行以实现用户界面。")]),u,e("p",null,[t("面向字符的界面（如 "),a(o,{to:"/ch06.html"},{default:i(()=>[t("第 6.3 节")]),_:1}),t(" 中所述）降低了复杂性。用户界面软件现在可以插入和删除任意范围的文本，而无需拆分和连接行，因此变得更加简单。文本类的实现可能会变得更加复杂：如果内部将文本表示为行的集合，则必须拆分和连接行以实现面向字符的操作。但这种方法更好，因为它在文本类中封装了拆分和连接的复杂性，从而降低了系统的整体复杂性。")]),d,e("p",null,[a(o,{to:"/ch06.html"},{default:i(()=>[t("第 6 章")]),_:1}),t("介绍了学生们如何在文本类中定义了一些反映用户界面的方法，例如实现退格键功能的方法。这似乎很好，因为它可以降低复杂性。但是，将用户界面的知识添加到文本类中并不会大大简化高层级的代码，并且用户界面的知识与文本类的核心功能无关。在这种情况下，降低复杂性只会导致信息泄露。")]),m,f,y,b])}const x=r(c,[["render",g],["__file","ch08.html.vue"]]),_=JSON.parse('{"path":"/ch08.html","title":"第 8 章 降低复杂性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"8.1 示例：编辑器文本类","slug":"_8-1-示例-编辑器文本类","link":"#_8-1-示例-编辑器文本类","children":[]},{"level":2,"title":"8.2 示例：配置参数","slug":"_8-2-示例-配置参数","link":"#_8-2-示例-配置参数","children":[]},{"level":2,"title":"8.3 做过头了","slug":"_8-3-做过头了","link":"#_8-3-做过头了","children":[]},{"level":2,"title":"8.4 结论","slug":"_8-4-结论","link":"#_8-4-结论","children":[]}],"git":{"updatedTime":1710207002000},"filePathRelative":"ch08.md"}');export{x as comp,_ as data};
