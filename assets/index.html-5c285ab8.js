import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c,a as n,b as t,d as l,e as o}from"./app-9fab1787.js";const d="/images/hero.jpg";const r={},m=l("img",{src:d},null,-1),p=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone https://github.com/choushunn/intelligent-perception-doc

<span class="token comment"># 进入项目所在目录</span>
<span class="token builtin class-name">cd</span> intelligent-perception-doc

<span class="token comment"># 安装pnpm包管理器</span>
<span class="token function">npm</span> i <span class="token function">pnpm</span> <span class="token parameter variable">-g</span>

<span class="token comment"># 设置pnpm的镜像源为淘宝镜像</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org

<span class="token comment"># 安装项目所需的依赖项</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行项目</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function u(v,h){const e=a("CustomPage");return i(),c("div",null,[m,n(` <div class="image-preview">
	<img src="/images/hero.jpg" /> `),n(` 	<img src="/images/hero.png" />
	<img src="/images/hero.png" /> `),n(" </div> "),p,t(e)])}const _=s(r,[["render",u],["__file","index.html.vue"]]);export{_ as default};
