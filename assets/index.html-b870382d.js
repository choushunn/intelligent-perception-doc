import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,a as n,b as i,d as c}from"./app-5e0f0f35.js";const t="/images/hero.jpg";const l={},d=i("img",{src:t},null,-1),o=c(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 克隆项目</span>
<span class="token function">git</span> clone https://github.com/choushunn/intelligent-perception-doc

<span class="token comment"># 进入项目所在目录</span>
<span class="token builtin class-name">cd</span> intelligent-perception-doc

<span class="token comment"># 安装pnpm包管理器</span>
<span class="token function">npm</span> i <span class="token function">pnpm</span> <span class="token parameter variable">-g</span>

<span class="token comment"># 设置pnpm的镜像源为淘宝镜像</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry http://registry.npm.taobao.org

<span class="token comment"># 安装项目所需的依赖项</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 运行项目</span>
<span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function r(p,m){return e(),a("div",null,[d,n(` <div class="image-preview">
	<img src="/images/hero.jpg" /> `),n(` 	<img src="/images/hero.png" />
	<img src="/images/hero.png" /> `),n(" </div> "),o])}const h=s(l,[["render",r],["__file","index.html.vue"]]);export{h as default};
