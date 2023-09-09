import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,d as n,f as e,b as a,e as r}from"./app-91828b8f.js";const c={},d=n("h2",{id:"依赖环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#依赖环境","aria-hidden":"true"},"#"),e(" 依赖环境")],-1),p={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"fork-原始项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fork-原始项目","aria-hidden":"true"},"#"),e(" Fork 原始项目")],-1),m={href:"https://github.com/choushunn/intelligent-perception-doc",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,'点击页面右上角的 "Fork" 按钮。这将在您的GitHub账号下创建一个仓库的副本。',-1),b=r(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone https://github.com/your-username/intelligent-perception-doc
<span class="token comment"># 将 \`your-username\` 替换为您的 GitHub 用户名。</span>

<span class="token comment"># 进入项目所在目录</span>
<span class="token builtin class-name">cd</span> intelligent-perception-doc

<span class="token comment"># 创建并切换到一个新的分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>

<span class="token comment"># 安装 pnpm 包管理器</span>
<span class="token function">npm</span> i <span class="token function">pnpm</span> <span class="token parameter variable">-g</span>

<span class="token comment"># 设置 pnpm 的镜像源为淘宝镜像</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org

<span class="token comment"># 安装项目所需的依赖项</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行项目</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参与贡献" tabindex="-1"><a class="header-anchor" href="#参与贡献" aria-hidden="true">#</a> 参与贡献</h2><p>如果您是一个新手并且不熟悉 Markdown，请先阅读以下文档：</p>`,6),k={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>在新分支上进行修改并提交更改：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将修改的文件添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 提交修改</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;添加了新的代码&quot;</span>

<span class="token comment"># 推送到远程仓库</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>branch_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建议阅读" tabindex="-1"><a class="header-anchor" href="#建议阅读" aria-hidden="true">#</a> 建议阅读</h2><p>另外，建议您阅读以下相关项目，以更好地理解本项目的构建方式：</p>`,4),x={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"};function z(N,V){const s=i("ExternalLinkIcon");return o(),l("div",null,[d,n("p",null,[e("在开始之前，请确保已下载并安装 "),n("a",p,[e("Node.js"),a(s)]),e("。")]),n("ul",null,[n("li",null,[n("a",u,[e("Node.js v16.19.0+"),a(s)])])]),h,n("ol",null,[n("li",null,[e("打开"),n("a",m,[e("本项目"),a(s)]),e(".")]),v]),b,n("ul",null,[n("li",null,[n("a",k,[e("Markdown 介绍"),a(s)])]),n("li",null,[n("a",_,[e("Markdown 增强"),a(s)])]),n("li",null,[n("a",f,[e("Markdown 演示"),a(s)]),e("。")])]),g,n("ul",null,[n("li",null,[n("a",x,[e("VuePress"),a(s)])]),n("li",null,[n("a",j,[e("VuePress Theme Hope"),a(s)])]),n("li",null,[n("a",w,[e("Markdown 增强"),a(s)])])])])}const B=t(c,[["render",z],["__file","contributing.html.vue"]]);export{B as default};
