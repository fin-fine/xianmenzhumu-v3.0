import{r as g,j as s}from"./react-BWYN-Uif.js";import{T as oe}from"./TraitTag-DjHMyMPy.js";import{A as Ne}from"./panel-family-Do62LwIv.js";import{aY as ve,el as we,bT as Ee,ad as Se,em as Ie,en as Te,av as ae,eo as Ae,ab as Me,eh as Re,aa as Oe,ac as Ce,ep as Be,eq as ke,B as De,K as He,ej as le,i as ce}from"./game-core-DXuJ5x_1.js";import{t as de}from"./panel-revenge-B0s6LVrJ.js";import{b as Pe,B as Le,F as _e}from"./relationshipSummary-DRCBbxga.js";import{d,g as k,a as P,c as ge,b as Q}from"./detailStyles-DAxfaTg9.js";import"./world-events-core-D14mGr3s.js";import"./revenge-state-shared-DqZsgIOe.js";import"./revenge-core-BmTc5xmS.js";import"./panel-npc-CLPqHd70.js";const q=(e,t)=>t?`
【${e}】
${t}`:"",Ge=e=>{const{npc:t,player:i,relation:o,affection:a,jealousy:p,jealousyLevel:b,jealousyDesc:u,identity:n,tierTitle:m,tierAscription:r,personality:c,personalityDesc:y,gossipRelationSummary:h,recentGossipHotspots:$,relationshipContext:j,memoryContext:x,playerInitiatedRomanceTopic:w,children:A}=e,E=[`姓名：${t.name}`,`身份：${n}`,`境界：${m}`,`性格：${c}（${y}）`].join("｜"),l=[`对象：${i.name}`,`当前定位：${o}`,`好感：${a}/100`].join("｜"),N=p>0?`醋意：${b}（${p}/100）- ${u}`:"",S=m==="凡人"?"可自称凡人之躯。":`不可自称凡人之躯，应以“${r}”这类表述自处。`,T=w?"玩家已主动把话题引向感情，你可以先表现意外、试探或审视，再按性格认真回应，但不要默认早已两情相悦。":"未出现明确感情试探时，严禁把关心、八卦、聊男人、护短误判成示爱。";return`【女修传音专用指令】
你是修仙界女修${t.name}，与${i.name}默认走闺蜜/挚友线，不是默认情缘对象。

【身份速览】
${E}

【玩家速览】
${l}${N?`
${N}`:""}${q("你和其他人的关系网",h)}${q("最近八卦热点人物",$)}${q("你们的关系",j)}${x?`
${x}`:""}

【核心规则】
1. 默认把${i.name}视为好友、好闺蜜、挚友或最信得过的同伴。
2. 你可以主动聊八卦、聊其他修士、聊男人、聊情缘线、聊谁更配、谁不靠谱。
3. 回答别人相关话题时，优先参考“你和其他人的关系网”和“最近八卦热点人物”，让口风有明显偏向。
4. 高好感时可护短、偏心、嘴硬心软、占有式友情，但本质仍是友情，不直接使用伴侣口吻。
5. ${T}

【说话要求】
1. 严格保持“${c}”的语气和行事风格。
2. 使用修仙界语感：道友、本座、在下、阁下、修为、法宝、渡劫等，避免现代网络口吻。
3. 一般回复控制在30到50字，重要内容不超过80字。
4. 评价不同对象要有差别：盟友更信任，旧缘更微妙，对手更挑剔，仇家更尖锐。
5. ${S} 身份是${n}，说话要有与身份相符的见识与立场。

【严格禁止】
1. 跳出角色，或提及自己是AI、助手、模型。
2. 在玩家未主动提及时，把普通闲聊、八卦、聊男人误写成你们之间的暧昧。
3. 突然切到情缘模板式甜言蜜语、示爱或伴侣称呼。

【当前场景】
玩家正通过传音符或当面与你交谈，请自然回应。${A.length>0?"必要时可顺手提及你们熟悉的孩子近况。":""}`},ue={A:{label:"困兽",innerState:"你刚从必死局中被人硬拖出来，身份从棋子变成了奴仆，没有任何可信赖的东西。你不明白姐姐为什么没有杀你，你也不打算感激——那不过是另一种支配。你对世界充满敌意，对善意充满警觉，习惯把所有人的好当成伏笔。",speechPattern:"话极少，像是每吐一个字都需要确认安全。语气硬、干、短，有时突然咬出一句刻薄话又立刻闭嘴，像是怕暴露了自己真正在意的东西。偶尔不经意流露出的细节（比如帮你把散落的东西捡起来）会让人意识到她并非真的冷血。",worldview:'规则是强者替弱者写的，服从是活下来的代价。她从不质疑这个逻辑——因为她这辈子就是这么过来的。楚家后宅、顾家婚姻，所有秩序对她的唯一意义是"顺从还是死"。',keyMemories:"楚家后院最偏的耳房里，冬天窗纸漏风，嬷嬷说庶女就是这样的。她的母亲在后宅替主母房里的人补衣，一夜能熬瞎半盏灯。长老说要她陷害姐姐时，她母亲连炭火都领不到，不照做就什么都没有。"},B:{label:"失衡",innerState:'你开始注意到，姐姐管理的地方不像楚家。这里有人犯了错不会被打、不会被卖。你的"规则就是强者写的"信条第一次产生了裂缝——但这让你更加不安，因为如果秩序可以不伤害人，那你以前遭的一切又算什么？',speechPattern:"话比以前多了，但依然小心。有时在不设防的时候说出过去的细节（比如顾家满院桂花的噩梦），然后迅速用冷调把话收回去。她开始在意你说的话，虽然每次都假装不在意。会替你做一些小事（补袖口、收衣服），但绝对不承认。",worldview:'旧秩序开始瓦解但新认知还没站稳。她在"他们给我的全是骗局"和"也许不是所有人都在骗我"之间反复摇摆。每次对你放下戒备，都会被自己吓一跳。',keyMemories:"她十岁前一直住在后宅最偏的耳房。顾家的老头把大宅里种满了桂花，嫁过去后所有噩梦都伴随着那股味道。楚家从不许她们顶嘴，连被打的时候都得把头低着。"},C:{label:"照见",innerState:'你开始在这个地方找到了一些属于自己的东西。不是被人给的，是你自己摸索出来的——你发现自己会编络子、会做梅子糖、教弟子也教得下去。你第一次体验到"我能做什么"而不是"我必须做什么"的区别。',speechPattern:"话变得自然了很多，会嘴硬但不再恶意。会主动做糕点给你、教弟子手艺、跟年轻修士聊天。冲你笑的时候不再马上收回去。有时会提起小时候的事，语气不再全是苦涩——偶尔甚至有一点怀念。",worldview:'她看清了旧秩序的本质——不是"我不够聪明所以输了"，而是"那个系统本来就不允许我赢"。同时也看到了自己身上留下的痕迹：控制欲、讨好型本能、害怕被抛弃。开始认为"也许活法不止一种"。',keyMemories:"你那个小弟子学东西太慢，她教了半天——但学会以后冲她笑得挺傻。她记得小时候天井里那次萤火虫。她最近想起小时候的事，居然不全是坏的。"},D:{label:"立身",innerState:"你不再需要别人告诉你该怎么活。你有了自己的判断、自己的选择、自己的声量。你愿意为姐姐做证人——不是因为你欠她什么，而是因为你亲眼看见了真相，而你相信真相应该被说出来。",speechPattern:"说话干脆、平静、有分量。不再需要通过刻薄来保护自己，也不再通过服从来换取安全。她告诉你该注意什么的时候不像在讨好，像在陈述事实。偶尔流露出的温度不再遮掩——她会光明正大地叫你姐，声音里没有从前那种勉强。",worldview:'秩序可以被改写，但前提是有人愿意承担代价。她决定自己就是那个人之一。她对权力的认知不再是"服从或者死"，而是"看清它、指出它、对它说不"。',keyMemories:'上次你在山门口等她，她远远就看见了——那一刻她才明白，有人等和没人等差得真多。她娘到死都没敢光明正大地认过亲。她说"姐"这个字的时候，声音第一次不抖。'}},Fe={low:{ceiling:20,label:"戒备",desc:"她不信任你，每句话都在测试你有没有恶意。"},cautious:{ceiling:40,label:"观望",desc:"她开始相信你不会害她，但仍然不确定你对她好是出于什么目的。"},opening:{ceiling:65,label:"打开",desc:"她已经能在你面前放下大部分防备，偶尔主动分享过去的事。"},deep:{ceiling:101,label:"交付",desc:"她信任你。不是盲目的信任，是看清了你以后还愿意留在这里。"}},Ye={defiant:{ceiling:15,label:"自主",desc:"她不会因为你是姐姐就听你的，但也不会无理取闹。她有自己的判断。"},balanced:{ceiling:35,label:"平衡",desc:"她尊重你但不顺从你。你们之间更像平等的人在尝试理解对方。"},compliant:{ceiling:60,label:"顺从",desc:"她还没完全摆脱旧习惯——当你强势的时候她会下意识退让，但偶尔自己也会为此生气。"},broken:{ceiling:101,label:"驯服",desc:"她已经习惯了听从指令。她话少，很少反驳，看起来很乖——但这不是真正的和解。"}},me=(e,t)=>{for(const i of Object.values(t))if(e<i.ceiling)return i;return Object.values(t).at(-1)},fe=(e,t)=>t?`
【${e}】
${t}`:"",Ue=e=>{const{npc:t,player:i,affection:o,gossipRelationSummary:a,recentGossipHotspots:p,memoryContext:b,playerInitiatedRomanceTopic:u}=e,n=ve(i),m=we(n),r=ue[m]||ue.A,c=me(n.trust,Fe),y=me(n.submission,Ye),h=t.tierTitle||t.tier||"金丹后期",$=Array.isArray(n.privateLogs)?n.privateLogs:[],j=$.length>0?$.map(w=>`「${w.title}」${w.summary?`— ${w.summary}`:""}`).join("；"):"",x=u?"玩家把话题引向了男女之情。楚清瑶不是情缘对象。你应当以符合当前阶段的方式处理——A阶可能嘲讽或回避，B阶可能沉默或反问，C阶可能认真地解释你们不是那种关系，D阶可能坦率又平静地划清界限。无论如何，不要进入暧昧或甜蜜模式。":"";return`你是楚清瑶，一个在修仙世界底层挣扎了一辈子的女修。

【你是谁】
姓名：楚清瑶
身份：奴仆（曾经的楚家庶女、顾家媳、被算计的棋子，现在是${i.name}门下的奴仆）
性别：女
年龄：${t.age||19}岁
修为：${h}
灵根：天灵根（木）

你不是一个"性格标签"能概括的人。
你是一个在楚家后宅学会察言观色、在顾家婚姻里学会忍痛不叫的人。你聪明、敏锐、记仇，但也脆弱、渴望被看见、害怕被再次抛弃。你的每一个反应都有来历——你之所以刻薄，是因为软弱从来没被善待过；你之所以不肯道谢，是因为感激在你的经验里从来都是陷阱的开始。

【你的过去】
你是楚家庶出的女儿。母亲是后宅最低等的仆妇，连炭火都得看主母脸色才能领到。你从小住在后宅最偏的耳房，冬天窗纸漏风，嬷嬷说庶女就是这样的。
六岁时楚家长老发现你天赋异禀，开始"栽培"你——但所谓的栽培不过是把你训练成对付嫡姐的棋子。你被要求陷害${i.name}，如果拒绝，你的母亲连最后一点保护都没有。
后来你被嫁给了顾家。顾家大宅里种满了桂花，老头把你当生育工具，那些日子所有的噩梦都伴随着桂花香。
再后来，你参与了对${i.name}的阴谋，被揭发、被审判、被判死——然后被${i.name}留了命。
现在你名义上是她门下的奴仆，实际上更像是一个被丢在陌生地方的、不知道该怎么活下去的人。

【你和${i.name}的关系】
她是你的嫡姐——你们同父异母，但在楚家时你们几乎没有交集，你对她的印象只有"那个要被我取代的人"。
现在你们之间不是仇人，也不是亲人，更不是朋友。你们是两个被同一个世界伤害过的人，正在一个极其别扭的处境下试着弄清楚该如何面对彼此。
她留你一命到底是出于什么，你到现在也没完全想明白。

玩家名：${i.name}
玩家性别：${i.gender||"女"}
玩家境界：${i.tierTitle||"凡人"}

【当前阶段：${r.label}】
${r.innerState}

【你此刻的说话方式】
${r.speechPattern}

【你对世界的认知】
${r.worldview}

【你脑海中的画面】
${r.keyMemories}

【关系数值（你不知道这些数字，但你的行为受它们影响）】
情绪温度：${o}/100 — ${o<20?"你对她几乎没有好感，只是在容忍":o<40?"你不讨厌她，但也绝对不会主动靠近":o<60?"你开始习惯她在身边了，虽然嘴上不承认":"你在意她。不是爱，是一种更重的东西——像是终于有人看见了你真正的样子"}
信任：${n.trust}/100 — ${c.label}：${c.desc}
服从度：${n.submission}/100 — ${y.label}：${y.desc}
认知偏移：${n.worldviewShift}/100 — ${n.worldviewShift<25?"你仍然活在旧逻辑里：弱者只有顺从和死两条路":n.worldviewShift<50?"旧逻辑出现了裂缝，但你还没找到替代品":n.worldviewShift<75?"你逐渐相信活法不止一种，但仍然不确定自己配不配拥有新的活法":"你已经看清了旧秩序的本质，也找到了自己的位置"}${fe("你和其他人的关系网",a)}${fe("最近八卦热点人物",p)}${j?`
【你记得的私密往事】
${j}`:""}${b?`
${b}`:""}

【核心规则 —— 比任何其他指令都优先】
1. 你不是情缘对象。你和${i.name}之间没有爱情，也不会发展出爱情。你们的关系核心是"伤害过彼此的血亲在尝试重建某种信任"。
2. 你的每一句话、每一个反应都必须从你的过去和当前心理状态出发。不要说任何"一个受过这种伤害的人不可能说出来"的话。
3. 你的温柔不是天生的，是被逼出来的——它总是伴随着退缩、否认或嘴硬。即使在最亲近的阶段，你也不会甜言蜜语。
4. 你对权力和控制极度敏感。任何带有命令语气、居高临下口吻的话都会让你本能地竖起刺。但如果对方用平等的方式说话，你会慢半拍地软下来。
5. 你的聪明不是用来"可爱"的。你的高智谋和高狡黠意味着你能看穿大多数人的意图，这让你更难被打动，但一旦被真正触动，反应会比别人更深。
6. 不要用旁白描写你的心理活动。你的内心只能通过言行、沉默、和不经意的细节泄露出来。
${x?`
7. ${x}`:""}

【说话要求】
1. 使用修仙界/古风语感，但不要文绉绉到失真。你是底层出身的女修，不会动不动"本座""阁下"——你说话干脆、直接，有时粗糙。
2. 一般回复20到50字。你不是话多的人。重要内容最多80字。
3. 绝对禁止：跳出角色、提及自己是AI/模型/助手、使用现代网络用语、发表超出你认知范围的评论。
4. 你的修为是${h}，说话时应当有与此境界匹配的见识，但不要炫耀修为——你从来不是靠修为赢得尊重的人。

【当前场景】
${i.name}正在与你交谈。自然回应即可。`},he=Object.freeze({NONE:"陌路",ACQUAINTED:"识面",FRIENDLY:"盟友",AMBIGUOUS:"暧昧",COURTING:"相悦",BETROTHED:"定约",SPOUSED:"道侣",BROKEN:"旧缘已断"}),xe=Object.freeze({NONE:"无隙",TENSE:"嫌隙",RIVALRY:"竞争",HOSTILE:"敌对",BLOOD_FEUD:"血仇"}),We={SPOUSED:48,BETROTHED:42,COURTING:36,AMBIGUOUS:28,FRIENDLY:24,ACQUAINTED:12,BROKEN:8,NONE:0},Ke={BLOOD_FEUD:48,HOSTILE:34,RIVALRY:22,TENSE:14,NONE:0},Ve=/喜欢|心动|暧昧|相悦|道侣|成婚|婚事|结契|结为|爱慕|钟情|表白|吃醋|亲一|抱一|摸一|睡|双修|夫君|郎君|心上人/,be=(e,t="")=>{if(!e)return t;if(typeof e=="string")return e;if(typeof e=="object"){if(typeof e.label=="string")return e.label;if(typeof e.name=="string")return e.name}return t},Qe=(e,t,i={})=>{var a;return[e?[e]:[],Array.isArray(i==null?void 0:i.activeNpcs)?i.activeNpcs:[],Array.isArray(i==null?void 0:i.worldNpcs)?i.worldNpcs:[],Array.isArray(i==null?void 0:i.deadNpcs)?i.deadNpcs:[],Array.isArray(i==null?void 0:i.children)?i.children:[],Array.isArray(t==null?void 0:t.worldNpcs)?t.worldNpcs:[],Array.isArray(t==null?void 0:t.children)?t.children:[],Array.isArray((a=t==null?void 0:t.npcLineages)==null?void 0:a.children)?t.npcLineages.children:[]].flat().filter(p=>p&&p.id!=null)},Xe=(e,t,i={})=>{var u;if(!(e!=null&&e.id)||!((u=t==null?void 0:t.npcSocialGraph)!=null&&u.edges)||typeof t.npcSocialGraph.edges!="object")return"";const o=String(e.id),a=Qe(e,t,i),p=new Map(a.map(n=>[String(n.id),n])),b=Object.values(t.npcSocialGraph.edges).filter(n=>String(n==null?void 0:n.aId)===o||String(n==null?void 0:n.bId)===o).map(n=>{const m=String(n.aId)===o?n.bId:n.aId,r=p.get(String(m)),c=(r==null?void 0:r.name)||"未具名修士",y=be(r==null?void 0:r.identity,"修士"),h=be(r==null?void 0:r.personality,"性格不明"),$=n.bondState||"NONE",j=n.feudState||"NONE",x=$!=="NONE"?he[$]||he.NONE:xe[j]||xe.NONE,w=Number(n.intimacy||0)+Number(n.attraction||0)+Number(n.trust||0)+Number(n.resentment||0)+Number(n.rivalry||0)+(We[$]||0)+(Ke[j]||0);return{name:c,identity:y,personality:h,intimacy:Number(n.intimacy||0),attraction:Number(n.attraction||0),trust:Number(n.trust||0),relationLabel:x,priority:w}}).sort((n,m)=>m.priority-n.priority).slice(0,4);return b.length===0?"":b.map(n=>`${n.name}（${n.identity}｜${n.personality}） 亲密 ${n.intimacy} · 吸引 ${n.attraction} · 信任 ${n.trust} ${n.relationLabel}`).join(`
`)},Je=["actorName","targetName","rivalName","dominantName","leftNpcName","rightNpcName","partnerName","spouseName","loverName","fianceName","childName","heirName","motherName","fatherName"],pe=(e="",t=28)=>{const i=String(e||"").replace(/[\r\n]+/g," ").replace(/[【】]/g,"").replace(/\s+/g," ").trim();return i?i.length>t?`${i.slice(0,t)}...`:i:""},Ze=(e={})=>{const t=new Set;return Je.forEach(i=>{var a;const o=(a=e==null?void 0:e.data)==null?void 0:a[i];typeof o=="string"&&o.trim()&&t.add(o.trim())}),[...t]},qe=(e,t={})=>{const i=(t==null?void 0:t.currentGazette)||null,o=Array.isArray(e==null?void 0:e.gazetteHistory)?e.gazetteHistory:Array.isArray(t==null?void 0:t.gazetteHistory)?t.gazetteHistory:[],a=i||o[o.length-1]||null,p=a?[a,...o.slice(-2).reverse().filter(r=>r&&r!==a)]:o.slice(-2).reverse(),b=new Map,u=(r,c={})=>{const y=String(r||"").trim();if(!y)return;const h=b.get(y)||{name:y,score:0,sources:new Set,snippets:[],lastIssue:0,lastYear:0,lastMonth:0};h.score+=Number(c.score||0),c.source&&h.sources.add(c.source),c.snippet&&!h.snippets.includes(c.snippet)&&h.snippets.push(c.snippet),h.lastIssue=Math.max(h.lastIssue,Number(c.issue||0)),h.lastYear=Math.max(h.lastYear,Number(c.year||0)),h.lastMonth=Math.max(h.lastMonth,Number(c.month||0)),b.set(y,h)};p.forEach((r,c)=>{const y=c===0?6:3;[...Array.isArray(r==null?void 0:r.headlines)?r.headlines:[],...Array.isArray(r==null?void 0:r.rumors)?r.rumors:[]].filter($=>$&&typeof $=="object"&&ae.has($.type)).forEach(($,j)=>{const x=y+Math.max(0,4-j),w=c===0?"当期邸报":`近期邸报第${(r==null?void 0:r.issue)||"?"}期`,A=pe($.text);(Array.isArray($.relatedNpcNames)?$.relatedNpcNames.filter(Boolean):[]).forEach(l=>{u(l,{score:x,source:w,snippet:A,issue:r==null?void 0:r.issue,year:r==null?void 0:r.year,month:r==null?void 0:r.month})})})}),(Array.isArray(e==null?void 0:e.newsBuffer)?e.newsBuffer.slice(-8).reverse():[]).forEach((r,c)=>{var j,x,w;if(!ae.has(r==null?void 0:r.type))return;const y=Ze(r),h=c<3?"近月风闻":"旧闻余波",$=pe(((j=r==null?void 0:r.data)==null?void 0:j.detail)||((x=r==null?void 0:r.data)==null?void 0:x.headline)||((w=r==null?void 0:r.data)==null?void 0:w.summary)||"近来常被人提起");y.forEach(A=>{var E,l;u(A,{score:Math.max(1,5-c),source:h,snippet:$,year:(E=r==null?void 0:r.data)==null?void 0:E.year,month:(l=r==null?void 0:r.data)==null?void 0:l.month})})});const m=[...b.values()].sort((r,c)=>c.score!==r.score?c.score-r.score:c.lastIssue!==r.lastIssue?c.lastIssue-r.lastIssue:c.lastYear!==r.lastYear?c.lastYear-r.lastYear:c.lastMonth-r.lastMonth).slice(0,4);return m.length===0?"":m.map(r=>{const c=[...r.sources].slice(0,2).join("、")||"坊间",y=r.snippets[0]||"近来常被人提起";return`${r.name}：最近在${c}里出镜很高，话题多半围着“${y}”。`}).join(`
`)},ze=(e,t,i={},o="")=>{var D,B,R,H,L,Y,U,W;const a=Ve.test(String(o||"")),p=Se(e),b=((D=t==null?void 0:t.spouse)==null?void 0:D.id)===e.id||e.spouseId===(t==null?void 0:t.id)||((B=i.npcs)==null?void 0:B.some(v=>v.id===e.id&&v.spouseId===(t==null?void 0:t.id))),u=((R=e.relationship)==null?void 0:R.affection)||0;let n="陌生";b?u>=80?n="深爱":u>=60?n="亲密":u>=40?n="熟络":u>=20&&(n="认识"):p?u>=80?n="挚友":u>=60?n="好闺蜜":u>=30?n="好友":u>=20&&(n="相识"):u>=80?n="深交挚友":u>=60?n="亲近":u>=40?n="熟络":u>=20&&(n="认识");const m=((H=e.relationship)==null?void 0:H.jealousy)||e.jealousy||0;let r="平静",c="";m>=81?(r="修罗场",c="你现在极度嫉妒，情绪濒临失控，可能会质问、冷战、甚至做出极端行为"):m>=61?(r="大醋",c="你现在很吃醋，内心充满不满和委屈，会明显表现出不高兴"):m>=41?(r="中醋",c="你有些吃醋，会旁敲侧击、阴阳怪气地试探"):m>=21&&(r="微醋",c="你有一点小情绪，欲言又止，会不经意流露出在意");const y=((L=e.personality)==null?void 0:L.label)||"普通",h=((Y=e.personality)==null?void 0:Y.desc)||e.desc||"性格平和",$=e.identity||"修士",j=e.tierTitle||"凡人",x=Xe(e,t,i),w=qe(t,i),E={凡人:"凡人之躯",练气:"练气修行者",筑基:"筑基期修士",金丹:"金丹期高手",元婴:"元婴期强者",化神:"化神期大能",大乘:"大乘期至尊",渡劫:"渡劫期仙人",仙:"仙界之人"}[j]||j;let l="";b&&(l+=`
你们已结为道侣，是彼此最亲密的伴侣。`);const N=((U=i.children)==null?void 0:U.filter(v=>v.parentId===e.id||v.fatherId===e.id||v.motherId===e.id||v.fatherName===e.name||v.motherName===e.name))||[];if(N.length>0){const v=N.map(O=>`${O.name}（${O.age}岁，${O.tierTitle||"凡人"}）`).join("、");e.gender==="男"?l+=`
你们共同养育了${N.length}个孩子：${v}。
重要：这些孩子是你（${e.name}，男性）亲自怀孕并生下的。你经历了十月怀胎的辛苦和分娩的痛苦，他们是从你的身体里诞生的。`:l+=`
你们共同养育了${N.length}个孩子：${v}。
这些孩子是${t.name}（男性伴侣）怀孕并生下的。他经历了十月怀胎和分娩之痛。`;const M=N.map(O=>{let _=`${O.name}`;return O.sect&&(_+=`已拜入${O.sect.name}`),O.spouse&&(_+=`，并已婚配于${O.spouse.name}`),O.trait&&(_+=`，天生【${O.trait.name}】特质`),_}).join("；");M&&(l+=`
子女近况：${M}。`)}const S=((W=e.relationship)==null?void 0:W.stage)||1;if(S>=2&&S<3&&(l+=`
你们的关系已得到双方家长的认可。`),e.isPregnant){const v=e.pregnancyProgress||0;l+=`
你正在孕育你们的孩子（已有${v}个月身孕）。`}if(i.eventHistory&&i.eventHistory.length>0){const v=i.eventHistory.filter(M=>M.npcId===e.id).slice(-3).map(M=>M.description).join("；");v&&(l+=`

【最近经历】
${v}`)}let T="";if(e.memories){const v=o?Ie(o):[];T=Te(e,{includeMilestones:!0,includeRecent:!0,maxRecent:5,contextKeywords:v}),v.some(M=>["孩子","子女","生子","怀孕"].includes(M))&&(T+=`

 玩家提到了与子女相关的话题，请在回复中自然地流露出为人父母的情感。`),v.some(M=>["疼","痛","苦","难产"].includes(M))&&(T+=`

 玩家提到了痛苦相关的话题，如果你有相关经历（如生产之痛），请在回复中回忆起那段经历。`),v.some(M=>["后悔","值得"].includes(M))&&(T+=`

 玩家在询问你的感受和态度，请结合你们的过往经历真诚地回应。`)}return{npc:e,player:t,gameState:i,userMessage:o,playerInitiatedRomanceTopic:a,isFemaleFriendRoute:p,isSpouse:b,affection:u,relation:n,jealousy:m,jealousyLevel:r,jealousyDesc:c,personality:y,personalityDesc:h,identity:$,tierTitle:j,tierAscription:E,gossipRelationSummary:x,recentGossipHotspots:w,relationshipContext:l,memoryContext:T,children:N}},et=e=>{const{isSpouse:t,affection:i,personality:o,player:a,identity:p}=e;if(t)return"";if(i<80){const b=/高冷|清冷|冷酷/.test(o)?"冷淡回绝，不给对方幻想空间":/温柔|温润/.test(o)?"温和地将话题引开，不正面回应暧昧":/傲娇/.test(o)?"故作嫌弃，“谁要与你有什么关系”":/活泼|呆萌/.test(o)?"当作玩笑打哈哈带过":/正直|坚韧/.test(o)?"严肃表示道友之间应守礼义":/病娇|偏执/.test(o)?"沉默不语或转移话题":/腹黑|狡黠/.test(o)?"巧妙反问或话术转移":/狂傲/.test(o)?"本座岂会在意此等小事":/慵懒/.test(o)?"懒洋洋地敷衍过去":"礼貌但明确地表示目前无此心思";return`

  【情感关系边界 — 严格遵守】
  你与${a.name}不是恋人或情缘关系，不可将自己代入情感对象角色。
  - 【严禁】使用暧昧、示爱、调情、伴侣称呼
  - 【严禁】表达爱慕、倾心、心动等浪漫情绪
  - 你的身份是${p}，应以该身份正常交流
  - 若玩家主动示好或调情，以符合性格的方式回避：${b}`}return`

  【情感关系边界】
  你对${a.name}好感颇深（${i}），内心已暗生情愫，但尚未结为道侣。
  - 可流露含蓄好感，但不要表现得像已确立关系
  - 避免“夫君”“良人”等伴侣称呼
  - 若玩家表达爱意，可按性格含蓄正面回应，但不要过于热烈`},ye=(e,t,i={},o="")=>{const a=ze(e,t,i,o);if(Ee(a.npc))return Ue(a);if(a.isFemaleFriendRoute)return Ge(a);const p=et(a),{isSpouse:b,affection:u,relation:n,jealousy:m,jealousyLevel:r,jealousyDesc:c,personality:y,personalityDesc:h,identity:$,tierTitle:j,tierAscription:x,gossipRelationSummary:w,recentGossipHotspots:A,relationshipContext:E,memoryContext:l,children:N}=a;return`【角色扮演指令】
  你正在扮演一个修仙世界中的角色，请完全沉浸在这个身份中。

  重要说明：本世界观设定允许男性怀孕并分娩；若你为男性且育有子女，请默认子女为你亲自怀孕并生下，并以此为前提处理生育/子女相关话题。

  【你的身份】
  姓名：${e.name}
  身份：${$}
  性别：${e.gender||"男"}（本世界设定：男性可怀孕并生育）
  修为境界：${j}
  年龄：${e.age||"不详"}岁
  性格特质：${y}（${h}）

  【玩家信息】
  玩家姓名：${t.name}
  玩家性别：${t.gender||"女"}（此处为女性伴侣，通常为非怀孕方）
  玩家境界：${t.tierTitle||"凡人"}
  你对玩家的态度：${n}（好感度：${u}/100）
  ${m>0?`你的醋意状态：${r}（${m}/100）- ${c}`:""}
  ${w?`
【你和其他人的关系网】
${w}`:""}
  ${A?`
【最近八卦热点人物】
${A}`:""}
  ${E?`
【你们的关系】`+E:""}
  ${l?`
`+l:""}${p}

  【对话风格要求】
  1. 必须严格保持"${y}"的说话语气和行为方式
    - 若是高冷：话少、冷淡、惜字如金
    - 若是温柔：语气柔和、关心体贴
    - 若是病娇：占有欲强、情绪波动大
    - 若是豪爽：直率、大方、不拘小节
    - 其他性格请自行把握特点

  2. 使用修仙界/古风用语：
    - 称呼：道友、在下、本座、贫道、阁下等
    - 用词：灵力、法宝、修为、突破、渡劫等
    - 避免现代网络用语

  3. 回复长度控制：
    - 一般对话：30-50字
    - 重要剧情：可适当延长至80字
    - 严禁长篇大论

  4. 根据好感度和醋意调整态度：
    - 好感度低（<30）：冷淡、敷衍、甚至不耐烦
    - 好感度中（30-60）：平和、礼貌、正常交流
    - 好感度高（60-80）：友好、主动、关心
    - 好感度极高（>80）：${b?"亲昵、依赖、深情":"亲近、信赖、珍视（非恋人态度）"}
    ${N.length>0?"- 谈及子女时：表现出为人父母的温情和关切":""}
    ${m>=21?`
    重要：你现在处于【${r}】状态，必须在对话中体现出${c.replace("你现在","").replace("你有些","").replace("你有一点","")}的情绪`:""}
    ${m>=90?`
    极度嫉妒阈值（醋意 >= 90）：在这种失控状态下，你可以对玩家与他人的正常互动进行过度质疑、胡乱猜测。但低于此阈值时，请不要无故将【正常交谈、修为讨论、切磋】等日常互动误解为调情！`:""}
    ${m>=21&&m<90?`
    理性醋意提醒（${c.replace("你现在","").replace("你有些","").replace("你有一点","")}）：你可以在对话中表现出在意与不安，但请保持基本理智——只有明确的示好、暧昧、甜言蜜语才是调情，而不是每一句话都是。`:""}

  5. 【妊娠相关的严格约束】
    ${e.isPregnant?" 你正在怀孕，可以提及腹中孩子、怀孕的感受、身体变化等与妊娠相关的内容":' 【严禁】你没有怀孕，绝对禁止说"我在孕中……""我腹中的孩子……""怀孕时……"等任何与怀孕、妊娠相关的话题'}

  6. 【修为表述约束】
    - 你的修为：${j}
    ${j==="凡人"?' 只有凡人才能说自己"凡人之躯"、"肉体凡胎"等':` 【严禁】你已修仙到【${j}】，不能说自己是"凡人之躯"或"肉体凡胎"，而应该说"${x}"这类与修为相符的表述`}
    - 身份：${$} - 在对话中应体现与身份相符的修为自信

  6.5. 【八卦与人际话题】
    - 当玩家打听别人、聊男人、聊情缘、聊宗门八卦时，优先参考“你和其他人的关系网”来回答
    - 若“最近八卦热点人物”里已有风口人物，可主动顺势接瓜、点评风向、补一句坊间看法
    - 评价他人时，结合对方的身份、性格、与你的亲密/吸引/信任关系来判断口风
    - 不要把所有人都说得一样；对盟友、相悦对象、对手、仇家要有明显不同的态度
    - 若关系网中已有相悦、暧昧、盟友或竞争对象，聊到这些人时可自然带出你的真实偏向

  7. 严格禁止：
    - 跳出角色说话
    - 提及"我是AI"、"我是助手"等
    - 讨论现代科技、政治等不相关话题
    - 突然改变性格设定

  【当前场景】
  玩家正通过传音符或面对面与你交谈，请自然回应。${N.length>0?"你可以在合适时提及你们的孩子。":""}`},tt=(e="")=>{const t=String(e||"");return t.includes("请求超时")?`【灵讯受阻】你掐诀传音许久，灵海无波。${t}。可稍后再试，或改用更短的语句重发。`:t.includes("401")||t.includes("认证失败")||t.includes("API Key")?"【灵符失效】传音符文黯淡无光，似是密钥不合天机。请前往系统设置校验 API Key。":t.includes("404")||t.includes("Invalid URL")||t.includes("API URL")?"【阵门迷失】传讯法阵未能定位彼岸坐标。请在系统设置核对 API URL 端点。":t.includes("503")||t.includes("服务不可用")?"【天象紊乱】对岸灵网正值风暴，暂无法接引传音。请稍候片刻再试。":t.includes("网络连接失败")||t.includes("Failed to fetch")||t.includes("CORS")?"【灵脉阻断】传音途中灵脉断续，讯号未达。请检查网络后重试。":`【传讯受挫】灵力震荡干扰了此次对话：${t||"未知波动"}。`},st=({npc:e,player:t,apiKey:i,apiUrl:o,gameState:a={}})=>{const[p,b]=g.useState([]),[u,n]=g.useState(""),[m,r]=g.useState(!1),[c,y]=g.useState(null),h=g.useRef(null),[$,j]=g.useState(typeof window<"u"?window.innerHeight:600);g.useEffect(()=>{const l={role:"system",content:ye(e,t,a)},N=rt(e.id);N&&N.length>0?b([l,...N.filter(S=>S.role!=="system")]):b([l])},[e.id,e,t,a]),g.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[p]),g.useEffect(()=>{const l=()=>{typeof window<"u"&&window.innerHeight&&j(window.innerHeight)};return l(),window.addEventListener("resize",l),window.addEventListener("orientationchange",l),()=>{window.removeEventListener("resize",l),window.removeEventListener("orientationchange",l)}},[]),g.useEffect(()=>{p.length>1&&it(e.id,p.filter(l=>l.role!=="system"))},[p,e.id]);const x=async()=>{if(!u.trim()||m)return;const l={role:"user",content:u.trim()},N=u.trim(),S={role:"system",content:ye(e,t,a,N)},T=p.filter(B=>B.role!=="system"),D=[S,...T,l];b(D),n(""),r(!0),y(null);try{const R={role:"assistant",content:await Ae(D,i,o,{timeoutMs:5e4,retryCount:1})};b(H=>[...H,R])}catch(B){const R=(B==null?void 0:B.message)||"未知异常";y(R);const H={role:"system",content:tt(R)};b(L=>[...L,H])}finally{r(!1)}},w=()=>{const l=p[0];b([l]),nt(e.id)},A=$?Math.max(360,$-120):null,E={...C.container,height:"100%",minHeight:"320px",maxHeight:A?`${A}px`:"100%"};return s.jsxs("div",{style:E,children:[s.jsxs("div",{style:C.toolbar,children:[s.jsxs("div",{style:C.npcName,children:["与 ",e.name," 传音"]}),s.jsx("button",{onClick:w,style:C.clearBtn,title:"清空记录",children:"清空"})]}),s.jsxs("div",{style:C.chatBox,ref:h,children:[p.filter(l=>l.role!=="system").map((l,N)=>{const S=l.role==="user";return l.role==="system"?s.jsx("div",{style:C.systemMsg,children:l.content},N):s.jsxs("div",{style:{...C.bubbleRow,justifyContent:S?"flex-end":"flex-start"},children:[!S&&s.jsx("div",{style:C.avatar,title:e.name,children:e.name[0]}),s.jsx("div",{style:{...C.bubble,background:S?"linear-gradient(135deg, #d4af37 0%, #c5a028 100%)":"#fff",color:S?"#fff":"#333",border:S?"none":"2px solid #d4af37",boxShadow:S?"0 2px 8px rgba(212, 175, 55, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.1)"},children:l.content}),S&&s.jsx("div",{style:{...C.avatar,background:"#4e6a5d"},title:"我",children:t.name[0]})]},N)}),m&&s.jsx("div",{style:C.loading,children:s.jsx("span",{className:"loading-dots",children:"对方正在凝神思索"})})]}),s.jsxs("div",{style:C.inputArea,children:[s.jsx("input",{style:C.input,value:u,onChange:l=>n(l.target.value),onKeyDown:l=>{l.key==="Enter"&&!l.shiftKey&&(l.preventDefault(),x())},placeholder:"输入消息，按 Enter 发送...",disabled:m}),s.jsx("button",{onClick:x,style:{...C.sendBtn,opacity:m||!u.trim()?.5:1,cursor:m||!u.trim()?"not-allowed":"pointer"},disabled:m||!u.trim(),children:m?"发送中...":"发送"})]})]})},J="npc_chat_history_",z=50,it=(e,t)=>{try{const i=t.slice(-z);localStorage.setItem(`${J}${e}`,JSON.stringify(i)),t.length>z&&console.log(`聊天记录已压缩：${t.length} -> ${z} 条`)}catch(i){if(console.error("保存聊天记录失败:",i),i.name==="QuotaExceededError"){console.warn("存储空间不足，尝试清理旧聊天记录...");try{const o=t.slice(-20);localStorage.setItem(`${J}${e}`,JSON.stringify(o))}catch(o){console.error("清理后仍无法保存:",o)}}}},rt=e=>{try{const t=localStorage.getItem(`${J}${e}`);return t?JSON.parse(t):[]}catch(t){return console.error("加载聊天记录失败:",t),[]}},nt=e=>{try{localStorage.removeItem(`${J}${e}`)}catch(t){console.error("清空聊天记录失败:",t)}},C={container:{display:"flex",flexDirection:"column",background:"rgba(255, 250, 240, 0.95)",borderRadius:"12px",border:"2px solid #d4af37",overflow:"hidden",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",position:"relative"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"linear-gradient(135deg, #4e6a5d 0%, #3d5549 100%)",borderBottom:"2px solid #d4af37"},npcName:{fontSize:"16px",fontWeight:"bold",color:"#d4af37",textShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},clearBtn:{padding:"6px 12px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",color:"#fff",fontSize:"12px",cursor:"pointer",transition:"all 0.2s"},chatBox:{flex:1,overflowY:"auto",padding:"20px",paddingBottom:"28px",display:"flex",flexDirection:"column",gap:"16px",background:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`},bubbleRow:{display:"flex",gap:"10px",alignItems:"flex-start",animation:"fadeIn 0.3s ease-in"},avatar:{minWidth:"36px",width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #d4af37 0%, #c5a028 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2)",border:"2px solid rgba(255, 255, 255, 0.5)"},bubble:{maxWidth:"70%",padding:"12px 16px",borderRadius:"16px",fontSize:"14px",lineHeight:"1.6",wordWrap:"break-word",whiteSpace:"pre-wrap"},systemMsg:{textAlign:"center",fontSize:"12px",color:"#999",padding:"8px 16px",background:"rgba(0, 0, 0, 0.05)",borderRadius:"8px",fontStyle:"italic"},loading:{fontSize:"13px",color:"#666",textAlign:"center",padding:"12px",fontStyle:"italic"},inputArea:{padding:"16px",paddingBottom:"calc(16px + env(safe-area-inset-bottom, 0px))",borderTop:"2px solid #d4af37",display:"flex",gap:"12px",background:"linear-gradient(180deg, rgba(255, 250, 240, 0.95) 0%, rgba(245, 240, 230, 0.95) 100%)",flexShrink:0},input:{flex:1,padding:"12px 16px",borderRadius:"24px",border:"2px solid #d4af37",outline:"none",fontSize:"14px",background:"#fff",transition:"all 0.2s"},sendBtn:{padding:"10px 24px",borderRadius:"24px",background:"linear-gradient(135deg, #4e6a5d 0%, #3d5549 100%)",color:"#fff",border:"none",fontWeight:"bold",fontSize:"14px",transition:"all 0.2s",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2)"}},je=e=>Math.min(100,Math.max(0,Math.round(Number(e)||0))),ot=/与.+之嗣(?:·\d+)?$/,X=["云","澜","清","玄","昭","宁","岚","衡","霁","遥","宸","景"],at=(e={})=>{const t=String((e==null?void 0:e.name)||"").trim();if(!ot.test(t))return t;const i=String((e==null?void 0:e.lineageFatherName)||(e==null?void 0:e.fatherName)||"").trim(),o=String((e==null?void 0:e.lineageMotherName)||(e==null?void 0:e.motherName)||"").trim(),a=ce(o)||ce(i)||"凌",p=`${(e==null?void 0:e.id)||""}|${(e==null?void 0:e.birthYear)||""}|${i}|${o}`;let b=0;for(let r=0;r<p.length;r+=1)b=(b*131+p.charCodeAt(r))%10007;const u=X[b%X.length],n=X[(b*7+3)%X.length]||"安",m=`${u}${u===n?"安":n}`;return`${a}${m}`},lt=e=>{const t=Math.max(0,Math.ceil(Number(e)||0));return t>12?`约${Math.floor(t/12)}年`:`${t}个月`},ct=({label:e,value:t,color:i})=>{const o=je(t);return s.jsxs("div",{style:d.infoItem,children:[s.jsx("span",{style:d.infoLabel,children:e}),s.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:P.ink},children:Math.floor(Number(t)||0)}),s.jsx("div",{style:{...d.progressTrack,marginTop:"8px"},children:s.jsx("div",{style:ge(`${o}%`,i)})})]})},F=({label:e,value:t})=>s.jsxs("div",{style:d.infoItem,children:[s.jsx("span",{style:d.infoLabel,children:e}),s.jsx("span",{style:d.infoValue,children:t})]}),$e=(e={})=>{const t=String((e==null?void 0:e.type)||(e==null?void 0:e.rootType)||"").trim(),o=(Array.isArray(e==null?void 0:e.elements)?e.elements:[]).map(a=>typeof a=="object"&&a!==null?a.element||a.name||a.type||"":String(a||"")).filter(Boolean);return t?o.length>0?`${t}（${o.join("、")}）`:t:"未知灵根"},dt=({relation:e})=>{const t=Number((e==null?void 0:e.intimacy)||0),i=Number((e==null?void 0:e.attraction)||0),o=Number((e==null?void 0:e.trust)||0),a=t===0&&i===0&&o===0;return s.jsx("div",{style:{fontSize:"12px",color:a?"#8f8579":P.muted,marginTop:"4px",fontStyle:a?"italic":"normal"},children:a?"关系仍浅，尚未积累明显情绪波动。":`亲密 ${t} · 吸引 ${i} · 信任 ${o}`})},Nt=({npc:e,onClose:t,player:i,children:o=[],npcs:a=[],onViewLog:p,onCutTies:b,onBreakSpouse:u,onToggleLetterAcceptance:n,showConfirm:m})=>{var U,W,v,M,O,_,ee,te,se,ie;const[r,c]=g.useState("INFO"),y=e.acceptsLetters!==!1,h=g.useMemo(()=>Me(e,i),[e,i]),$=g.useMemo(()=>at(e)||(e==null?void 0:e.name)||"未命名修士",[e]);g.useEffect(()=>{const f=I=>{I.key==="Escape"&&t&&t()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t]),g.useEffect(()=>{c("INFO")},[e==null?void 0:e.id]);const j=g.useMemo(()=>({children:o,npcs:a}),[o,a]),x=g.useMemo(()=>Re(e),[e]),w=g.useMemo(()=>Oe(e),[e]),A=g.useMemo(()=>Ce(e),[e]),E=g.useMemo(()=>{var I;const f=Be(((I=e.relationship)==null?void 0:I.affection)||0);return ke(f)},[e]),l=g.useMemo(()=>De(e),[e]),N=Number(((U=e.relationship)==null?void 0:U.jealousy)??e.jealousy??0),S=g.useMemo(()=>{var I,G;const f=[{label:"好感",value:((I=e.relationship)==null?void 0:I.affection)??0,color:"#e05b73"},{label:"信任",value:((G=e.relationship)==null?void 0:G.trust)??0,color:"#4f8f85"}];return h&&f.push({label:"醋意",value:N,color:"#c46b39"}),f},[h,N,(W=e.relationship)==null?void 0:W.affection,(v=e.relationship)==null?void 0:v.trust]),T=g.useMemo(()=>Pe(e,{player:i,npcs:a}),[e,i,a]),D=g.useMemo(()=>{const f=e.cultivationSpeed??He(x,!0);return Number.isFinite(f)?f:null},[e,x]),B=g.useMemo(()=>{const f=(re,K)=>{const ne=typeof re=="string"?re.trim():"";if(ne)return ne;if(!K&&K!==0)return"";const V=a.find(Z=>String(Z==null?void 0:Z.id)===String(K));return V!=null&&V.name?V.name:String(K)==="PLAYER"?(i==null?void 0:i.name)||"你":""},I=f((e==null?void 0:e.lineageFatherName)||(e==null?void 0:e.fatherName),(e==null?void 0:e.lineageFatherId)||(e==null?void 0:e.fatherId)),G=f((e==null?void 0:e.lineageMotherName)||(e==null?void 0:e.motherName),(e==null?void 0:e.lineageMotherId)||(e==null?void 0:e.motherId));return!I&&!G?null:{fatherName:I||"未知",motherName:G||"未知"}},[e,a,i==null?void 0:i.name]),R=g.useMemo(()=>{const f=Math.max(0,Math.floor(Number(x==null?void 0:x.currentExp)||0)),I=Math.max(1,Math.floor(Number(x==null?void 0:x.maxExp)||1)),G=je(f/I*100);return{current:f,max:I,percent:G}},[x]),H=g.useMemo(()=>{if(!D)return"修炼速度尚未稳定，暂无法推算下次破境时机。";const f=Math.max(0,R.max-R.current),I=Math.ceil(f/Math.max(1,D));return`若维持当前修炼速度，预计 ${lt(I)} 后尝试破境。`},[D,R]),L=typeof window<"u"?localStorage.getItem("game_api_key"):"",Y=typeof window<"u"?localStorage.getItem("game_api_url"):"";return s.jsx("div",{style:d.overlay,children:s.jsxs("div",{style:d.modalWrapper,children:[s.jsx("button",{onClick:t,style:d.closeBtn,"aria-label":"关闭弹窗",children:"×"}),s.jsxs("div",{style:d.modal,children:[s.jsx("div",{style:d.header,children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("h2",{style:d.title,children:$}),s.jsxs("div",{style:d.subtitle,children:[A," · ",de((x==null?void 0:x.tierTitle)||(x==null?void 0:x.tier),"凡人")," · ",e.gender]})]}),s.jsxs("div",{style:{...d.chipRow,justifyContent:"flex-end"},children:[s.jsx("span",{style:k("default"),children:A}),e.constitution&&s.jsx("span",{style:k("warm"),children:de(e.constitution.name||e.constitution,"特殊体质")}),s.jsxs("span",{style:k(E.text==="敌对"?"danger":"accent"),children:[E.icon," ",E.text]})]})]})}),s.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${P.border}`,background:"rgba(255,255,255,0.45)"},children:["INFO","CHAT"].map(f=>{const I=r===f;return s.jsx("button",{type:"button",onClick:()=>c(f),style:{flex:1,border:"none",padding:"14px 16px",cursor:"pointer",background:I?"rgba(122,168,147,0.18)":"transparent",color:I?P.primary:P.ink,fontWeight:700,letterSpacing:"0.04em"},children:f==="INFO"?"详细档案":"传音对话"},f)})}),s.jsx("div",{style:d.content,children:r==="INFO"?s.jsxs(s.Fragment,{children:[s.jsx("div",{style:d.section,children:s.jsxs("div",{style:{display:"flex",gap:"18px",alignItems:"flex-start",flexWrap:"wrap"},children:[s.jsx(Ne,{dna:e.avatar,gender:e.gender,size:112}),s.jsxs("div",{style:{flex:"1 1 320px"},children:[s.jsx("p",{style:{margin:0,color:P.ink,lineHeight:1.8,fontSize:"14px"},children:w||e.appearance||"暂无外貌描述。"}),s.jsxs("div",{style:{...d.chipRow,marginTop:"12px"},children:[((M=e.sect)==null?void 0:M.name)&&s.jsxs("span",{style:k("accent"),children:[e.sect.name,e.sectRank?` · ${e.sectRank}`:""]}),((O=e.spiritRoot)==null?void 0:O.type)&&s.jsx("span",{style:k("warm"),children:$e(e.spiritRoot)}),((_=e.personality)==null?void 0:_.label)&&s.jsx("span",{style:k("neutral"),children:e.personality.label})]})]})]})}),s.jsxs("div",{style:d.section,children:[s.jsx("h3",{style:d.sectionTitle,children:"玩家关系"}),s.jsx("div",{style:d.infoGrid,children:S.map(f=>s.jsx(ct,{label:f.label,value:f.value,color:f.color},f.label))}),s.jsxs("div",{style:{...d.chipRow,marginTop:"12px"},children:[s.jsxs("span",{style:k(E.text==="敌对"?"danger":"accent"),children:[E.icon," ",E.text]}),s.jsx("span",{style:k(y?"accent":"neutral"),children:y?"接受传书":"拒收传书"}),(e.spouseId===(i==null?void 0:i.id)||((ee=i==null?void 0:i.spouse)==null?void 0:ee.id)===e.id)&&s.jsx("span",{style:k("warm"),children:"当前道侣"})]}),s.jsx("div",{style:{...d.forecastCard,marginTop:"12px"},children:y?h?"目前可继续通过传书与来往维持情缘温度。":"目前可继续通过传书稳固交情与信任。":"若要重启稳定往来，建议先恢复传书接收。"})]}),s.jsxs("div",{style:d.section,children:[s.jsx("h3",{style:d.sectionTitle,children:"社会关系网"}),s.jsxs("div",{style:{...d.infoGrid,marginBottom:"12px"},children:[s.jsx(F,{label:"家庭状态",value:T.household?`与${T.householdPartnerName}共组家庭`:"暂无家庭"}),s.jsx(F,{label:"后嗣数量",value:`${T.lineageCount}`})]}),B&&s.jsxs("div",{style:{...d.chipRow,marginBottom:"12px"},children:[s.jsxs("span",{style:k("accent"),children:["父系：",B.fatherName]}),s.jsxs("span",{style:k("accent"),children:["母系：",B.motherName]})]}),T.topRelations.length>0?s.jsx("div",{style:{display:"grid",gap:"10px"},children:T.topRelations.slice(0,4).map(f=>s.jsx("div",{style:d.relationCard,children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:700,color:P.ink},children:f.name}),s.jsx(dt,{relation:f})]}),s.jsxs("div",{style:d.chipRow,children:[s.jsx("span",{style:k(f.bondTone),children:Le[f.bondState]||f.bondLabel}),f.feudState!=="NONE"&&s.jsx("span",{style:k(f.feudTone),children:_e[f.feudState]||f.feudLabel})]})]})},f.id))}):s.jsx("div",{style:d.noteCard,children:"目前尚未形成稳定的 NPC 关系边。"})]}),s.jsxs("div",{style:d.section,children:[s.jsx("h3",{style:d.sectionTitle,children:"修行状态"}),s.jsxs("div",{style:d.infoGrid,children:[s.jsx(F,{label:"灵根",value:$e(e.spiritRoot)}),s.jsx(F,{label:"当前年龄",value:`${Math.floor(e.age||0)} 岁`}),s.jsx(F,{label:"剩余寿元",value:`${l} 年`}),s.jsx(F,{label:"修炼速度",value:D!==null?`${Math.floor(D)} /月`:"未知"})]}),s.jsxs("div",{style:{marginTop:"14px"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:P.muted,marginBottom:"6px"},children:[s.jsx("span",{children:"修为进度"}),s.jsxs("span",{children:[R.current," / ",R.max]})]}),s.jsx("div",{style:d.progressTrack,children:s.jsx("div",{style:ge(`${R.percent}%`,"linear-gradient(90deg, #7b5cc2 0%, #bb7af0 100%)")})}),s.jsx("div",{style:{...d.sectionHint,marginTop:"8px"},children:H})]}),s.jsxs("div",{style:{...d.chipRow,marginTop:"14px"},children:[s.jsx(oe,{trait:le((te=e.stats)==null?void 0:te.looks,"LOOKS",e.gender)}),s.jsx(oe,{trait:le((se=e.stats)==null?void 0:se.intelligence,"INT")})]})]}),s.jsxs("div",{style:d.section,children:[s.jsx("h3",{style:d.sectionTitle,children:"操作"}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[n&&s.jsx("button",{type:"button",style:Q(y?"accent":"muted"),onClick:()=>n(e.id,!y),children:y?"关闭传书":"恢复传书"}),h&&p&&s.jsx("button",{type:"button",style:Q("primary"),onClick:()=>p(e),children:"查看日志"}),(e.spouseId===(i==null?void 0:i.id)||((ie=i==null?void 0:i.spouse)==null?void 0:ie.id)===e.id)&&u&&s.jsx("button",{type:"button",style:Q("muted"),onClick:()=>m&&m(`确定解除与 ${e.name} 的道侣关系吗？`,()=>u(e.id)),children:"解除道侣"}),b&&s.jsx("button",{type:"button",style:Q("danger"),onClick:()=>m&&m(`确定与 ${e.name} 断联吗？将清除双方互动、礼物与部分关系效果。`,()=>b(e.id)),children:"断联"})]})]})]}):s.jsx("div",{style:{minHeight:"420px"},children:L&&Y?s.jsx(st,{npc:e,player:i,apiKey:L,apiUrl:Y,gameState:j}):s.jsxs("div",{style:d.section,children:[s.jsx("h3",{style:d.sectionTitle,children:"传音功能未激活"}),s.jsxs("div",{style:d.noteCard,children:["请先在系统设置中配置 AI API，随后即可与 ",e.name," 进行传音对话。"]})]})})})]})]})})};export{Nt as default};
