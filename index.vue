<template><div><h2 id="认识运算符" tabindex="-1"><a class="header-anchor" href="#认识运算符" aria-hidden="true">#</a> <strong>认识运算符</strong></h2>
  <p>*<em>在小学的时候我们就学习了各种运算符，比如<font color='red'>加号 +、乘号 <em>、减号 - 、除号/</font></em></p>
  <p><strong>几乎所有的编程语言都有各种各样的运算符(也被称之为操作符，operators)</strong></p>
  <ul>
  <li>初次接触这些<font color='red'>运算符</font>, 你会感觉<font color='red'>种类繁多</font>, 难以记忆.</li>
  <li>但是并不需要特别担心, 因为<font color='red'>很多的运算符</font>我们在以后的开发中, 每天都会使用；</li>
  <li>多练习, 不需要刻意去记忆；</li>
  <li>而且常见的高级语言<font color='red'>运算符都是相似的</font>，学了JavaScript运算符很容易掌握C/C++/OC/Python等语言的运算符；</li>
  </ul>
  <p><strong>计算机最基本的操作就是<font color='red'>执行运算</font>，执行运算时就需要<font color='red'>使用运算符来操作</font>：</strong></p>
  <ul>
  <li>比如 console.log(20 + 30); <code v-pre>+</code>号就是一个运算符.</li>
  <li>比如 console.log(20 * 30); <code v-pre>*</code>号也是一个运算符.</li>
  </ul>
  <p><strong>JavaScript按照使用场景的不同将运算符分成了很多种类型：</strong></p>
  <ul>
  <li>
  <font color='red'>算术运算符/赋值运算符/关系(比较)运算符/逻辑运算符</font></li>
  </ul>
  <h2 id="认识运算元" tabindex="-1"><a class="header-anchor" href="#认识运算元" aria-hidden="true">#</a> 认识运算元</h2>
  <p><strong>在正式开始运算之前，我们先学习一下常见的术语：</strong></p>
  <ul>
  <li>
  <font color='red'>运算元 —— 运算符应用的对象。</font></li>
  </ul>
  <p>✓ 比如说乘法运算 5 * 2，有两个运算元；</p>
  <p>✓ 左运算元 5 和右运算元 2；</p>
  <p>✓ 有时候人们也称其为“参数”；</p>
  <ul>
  <li>如果一个<font color='red'>运算符</font>对应的只有<font color='red'>一个运算元</font>，那么它是<font color='red'> 一元运算符</font>。</li>
  </ul>
  <p>✓ 比如说一元<font color='red'>负号运算符（unary negation）</font>-，它的作用是对数字进行正负转换；</p>
  <ul>
  <li>如果一个<font color='red'>运算符</font>拥有<font color='red'>两个运算元</font>，那么它是<font color='red'> 二元运算符</font>。</li>
  </ul>
  <p>✓ 比如 2 + 3</p>
  <p><strong>一元运算符通常我们是使用 – 和 +，-号使用的会较多一些；</strong></p>
  <h2 id="javascript中的运算" tabindex="-1"><a class="header-anchor" href="#javascript中的运算" aria-hidden="true">#</a> <strong>JavaScript中的运算</strong></h2>
  <p><strong>算术运算符</strong></p>
  <ul>
  <li>算术运算符用在数学表达式中, 它的使用方式和数学中也是一直的；</li>
  <li>算术运算符是对数据进行计算的符号；</li>
  </ul>
  <p><img src="https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/code/image-20230327220111074.png" alt="image-20230327220111074"></p>
  <p>示例：</p>
  <ul>
  <li>加减乘除</li>
  </ul>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// + - *</span>
  <span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">50</span>
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">8</span>
  <span class="token keyword">var</span> result1 <span class="token operator">=</span> num1 <span class="token operator">+</span> num2
  <span class="token keyword">var</span> result2 <span class="token operator">=</span> num1 <span class="token operator">-</span> num2
  <span class="token keyword">var</span> result3 <span class="token operator">=</span> num1 <span class="token operator">*</span> num2
  
  <span class="token comment">// 58 42 400</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">,</span> result2<span class="token punctuation">,</span> result3<span class="token punctuation">)</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
  <li></li>
  </ul>
  <h2 id="取余-和-求幂" tabindex="-1"><a class="header-anchor" href="#取余-和-求幂" aria-hidden="true">#</a> <strong>取余 % 和 求幂</strong></h2>
  <p><strong>取余运算符是 %，尽管它看起来很像百分数，但实际并无关联</strong></p>
  <ul>
  <li>
  <font color='red'>a % b </font>的结果是 a 整除 b 的 余数</li>
  </ul>
  <p><em><em>求幂运算 a *</em> b 将 a 提升至 a 的 b 次幂。（ES7中的语法，也叫做ES2016）</em>*</p>
  <ul>
  <li>在数学中我们将其表示为 a的b次方。</li>
  </ul>
  <p><strong>示例：</strong></p>
  <ul>
  <li>取余操作</li>
  </ul>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// %: 取余操作</span>
  <span class="token keyword">var</span> result4 <span class="token operator">=</span> num1 <span class="token operator">%</span> num2
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result4<span class="token punctuation">)</span> <span class="token comment">// 2</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
  <li>乘方</li>
  </ul>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// **: 2 ** 3 2的三次方</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 16</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 16</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h2>
  <p><strong>前面我们使用的<font color='red'> = 其实也是一个运算符</font>，被称之为<font color='red'> 赋值（ assignments ）运算符</font>。</strong></p>
  <p><strong>= 是一个运算符，而不是一个有着“魔法”作用的语言结构。</strong></p>
  <ul>
  <li>语句 x = value 将值 value 写入 x 然后返回 x。</li>
  </ul>
  <p><strong>链式赋值（Chaining assignments）</strong></p>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// = : 赋值运算符</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">123</span>
  
  <span class="token comment">// 链式赋值</span>
  <span class="token keyword">var</span> num1 <span class="token operator">=</span> num2 <span class="token operator">=</span> num3 <span class="token operator">=</span> <span class="token number">100</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3<span class="token punctuation">)</span> <span class="token comment">// 100 100 100</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
  <li>
  <p>链式赋值<font color='red'>从右到左进行计算</font>；</p>
  </li>
  <li>
  <p>首先，对最右边的表达式 2 + 2 求值，然后将其赋给左边的变量：c、b 和 a。</p>
  </li>
  <li>
  <p>最后，<font color='red'>所有的变量共享一个值</font>。</p>
  </li>
  </ul>
  <p>但是从代码的可读性的角度来说，<font color='red'>不推荐这种写法</font>。</p>
  <h2 id="原地修改-modify-in-place" tabindex="-1"><a class="header-anchor" href="#原地修改-modify-in-place" aria-hidden="true">#</a> 原地修改（Modify-in-place）</h2>
  <p><strong>什么是原地修改呢？</strong></p>
  <ul>
  <li>我们经常需要对一个变量做运算，并将新的结果存储在同一个变量中。</li>
  </ul>
  <p><strong>可以使用运算符 += 和 *= 来缩写这种表示。</strong></p>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token comment">// num1 = num1 + 10</span>
  num1 <span class="token operator">+=</span> <span class="token number">10</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span> <span class="token comment">// 110</span>
  
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">100</span>
  <span class="token comment">// num2 = num2 * 10</span>
  num2 <span class="token operator">*=</span> <span class="token number">10</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span> <span class="token comment">// 1000</span>
  
  <span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">100</span>
  num3 <span class="token operator">**=</span> <span class="token number">2</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span> <span class="token comment">// 10000</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有算术和位运算符都有简短的<font color='red'>“修改并赋值”运算符</font>：/= 和 -= 等。</p>
  <p><img src="https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/code/image-20230327220758287.png" alt="image-20230327220758287"></p>
  <h2 id="自增、自减" tabindex="-1"><a class="header-anchor" href="#自增、自减" aria-hidden="true">#</a> 自增、自减</h2>
  <p><strong>对一个数进行<font color='red'>加一</font>、<font color='red'>减一</font>是<font color='red'>最常见的数学运算符</font>之一。</strong></p>
  <p><strong>所以，对此有一些专门的运算符：</strong></p>
  <ul>
  <li>自增 <font color='red'>++</font> 将变量加1；</li>
  <li>自减 <font color='red'>--</font> 将变量减1；</li>
  </ul>
  <p><strong>自增/自减只能应用于变量。</strong></p>
  <ul>
  <li>将其应用于数值（比如 5++）则会报错。</li>
  </ul>
  <p><strong>示例：</strong></p>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> currentIndex <span class="token operator">=</span> <span class="token number">5</span>
  
  <span class="token comment">// 方法一:</span>
  <span class="token comment">// currentIndex = currentIndex + 1</span>
  
  <span class="token comment">// 方法二:</span>
  currentIndex <span class="token operator">+=</span> <span class="token number">1</span>
  
  <span class="token comment">// 方法三: 自增 </span>
  currentIndex<span class="token operator">++</span>
  
  <span class="token comment">// 自减</span>
  currentIndex<span class="token operator">--</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和—的位置" tabindex="-1"><a class="header-anchor" href="#和—的位置" aria-hidden="true">#</a> ++和—的位置</h2>
  <p><strong>运算符 ++ 和 -- 可以置于变量前，也可以置于变量后。</strong></p>
  <ul>
  <li>当运算符置于变量后，被称为“<font color='red'>后置形式</font>”（postfix form）：counter++。</li>
  <li>当运算符置于变量前，被称为“<font color='red'>前置形式</font>”（prefix form）：++counter。</li>
  <li>两者都做同一件事：将变量 counter 与 1 相加。</li>
  </ul>
  <p><strong>他们有什么区别吗？</strong></p>
  <ul>
  <li>有，但<font color='red'>只有当我们使用 ++/-- 的返回值时</font>才能看到区别；</li>
  <li>如果<font color='red'>自增/自减的值不会被使用，那么两者形式没有区别</font>；</li>
  <li>如果我们想要<font color='red'>对变量进行自增操作</font>，并且 <font color='red'>需要立刻使用自增后的值</font>，那么<font color='red'>我们需要使用前置形式</font>；</li>
  <li>
  <font color='red'>前置形式返回一个新的值</font>，但<font color='red'>后置返回原来的值</font>；</li>
  </ul>
  <p>示例：</p>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 如果是自己 自增 或 自减, 那是没有区别的</span>
  <span class="token keyword">var</span> currentIndex <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token operator">++</span>currentIndex
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentIndex<span class="token punctuation">)</span> <span class="token comment">// 6</span>
  currentIndex<span class="token operator">--</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentIndex<span class="token punctuation">)</span> <span class="token comment">// 5</span>
  
  <span class="token comment">// 2. 自增和自减表达式本身又在其他的表达式中, 那就有区别</span>
  <span class="token keyword">var</span> count1 <span class="token operator">=</span> <span class="token number">5</span> 
  <span class="token keyword">var</span> result1 <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> count1<span class="token operator">++</span>  <span class="token comment">// 先计算了表达式, 再自增</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"count1:"</span><span class="token punctuation">,</span> count1<span class="token punctuation">)</span> <span class="token comment">// count1: 6</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"result1:"</span><span class="token punctuation">,</span> result1<span class="token punctuation">)</span> <span class="token comment">// result1: 105</span>
  
  <span class="token keyword">var</span> count2 <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token keyword">var</span> result2 <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token operator">++</span>count2
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"count2:"</span><span class="token punctuation">,</span> count2<span class="token punctuation">)</span> <span class="token comment">// count2: 6</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"result2:"</span><span class="token punctuation">,</span> result2<span class="token punctuation">)</span> <span class="token comment">// result2: 106</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h2>
  <p><strong>运算符放到一起使用时会有一定的优先级：</strong></p>
  <p><strong>在MDN上给出了所有运算符的优先级（不用去记）</strong></p>
  <ul>
  <li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence<ExternalLinkIcon/></a></li>
  </ul>
  <p><img src="https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/code/image-20230327221918590.png" alt="image-20230327221918590"></p>
  <h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2>
  <p><strong>我们知道，在数学中有很多用于比较大小的运算符，在JavaScript中也有相似的比较：</strong></p>
  <ul>
  <li>
  <font color='red'>大于 / 小于</font>：a &gt; b，a &lt; b。</li>
  <li>
  <font color='red'>大于等于 / 小于等于</font>：a &gt;= b，a &lt;= b。</li>
  <li>
  <font color='red'>检查两个值的相等</font>：a == b，请注意双等号 == 表示相等性检查，而单等号 a = b 表示赋值。</li>
  <li>
  <font color='red'>检查两个值不相等</font>：不相等在数学中的符号是 ≠，但在 JavaScript 中写成 a != b。</li>
  </ul>
  <p><strong>比较运算符的结果都是Boolean类型的</strong></p>
  <p><img src="https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/code/image-20230327222035386.png" alt="image-20230327222035386"></p>
  <p>示例：</p>
  <div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">20</span>
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">30</span>
  
  <span class="token comment">// 1. 比较运算符</span>
  <span class="token keyword">var</span> isResult <span class="token operator">=</span> num1 <span class="token operator">></span> num2
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isResult<span class="token punctuation">)</span> <span class="token comment">// false</span>
  
  <span class="token comment">// 2. == 判断</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">==</span> num2<span class="token punctuation">)</span> <span class="token comment">// false</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">!=</span> num2<span class="token punctuation">)</span> <span class="token comment">// true</span>
  </code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> === 和 == 的区别</h2>
  <p><strong>普通的相等性检查 == 存在一个问题，它不能区分出 0 和 false，或者空字符串和 false这类运算：</strong></p>
  <ul>
  <li>这是因为在<font color='red'>比较不同类型的值时</font>，处于<font color='red'>判断符号 == 两侧的值会先被转化为数字</font>；</li>
  <li>
  <font color='red'>空字符串和 false 也是如此，转化后它们都为数字 0</font>；</li>
  </ul>
  <p><strong>如果我们需要区分 0 和 false，该怎么办？</strong></p>
  <ul>
  <li>
  <font color='red'>严格相等运算符 ===</font> 在进行比较时不会做任何的类型转换；</li>
  <li>
  <p>换句话说，如果<font color='red'> a 和 b 属于不同的数据类型</font>，那么 a === b <font color='red'>不会做任何的类型转换而立刻返回 false</font>；</p>
  </li>
  </ul>
  <p><strong>同样的，“不相等”符号 != 类似，“严格不相等”表示为 !==。</strong></p>
  <p><strong>严格相等的运算符虽然写起来稍微长一些，但是它能够<font color='red'>很清楚地显示代码意图，降低你犯错的可能性</font>。</strong></p>
  </div></template>
  
  
  