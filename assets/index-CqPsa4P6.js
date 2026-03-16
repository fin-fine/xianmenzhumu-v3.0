import{r as S,j as n}from"./react-BWYN-Uif.js";import{T as de}from"./TraitTag-DjHMyMPy.js";import{A as Ie}from"./panel-family-D4_0ZGYD.js";import{bh as Te,eS as Ae,aE as Me,aG as Oe,eT as Ce,eU as Re,$ as ue,eV as He,aC as Be,eO as Pe,aB as Le,aF as De,eW as ke,eX as _e,A as Ge,J as Fe,eQ as me,i as fe}from"./game-core-BzQ-p5Jt.js";import{t as he}from"./panel-revenge-LYNJhqyh.js";import{b as Ue,B as Ye,F as We}from"./relationshipSummary-DRCBbxga.js";import{d as b,g as L,a as k,c as ye,b as q}from"./detailStyles-CBOui8-5.js";import"./world-events-core-D14mGr3s.js";import"./revenge-state-shared-UNAMljXf.js";import"./revenge-core-wLXJxL7f.js";import"./panel-npc-DxVSLsgu.js";const z=(e,t)=>t?`
【${e}】
${t}`:"",Ve=e=>{const{npc:t,player:s,relation:l,affection:c,jealousy:g,jealousyLevel:h,jealousyDesc:x,identity:r,aptitude:d,spiritRootText:i,tierTitle:o,cultivationValue:N,tierAscription:$,personality:p,personalityDesc:j,gossipRelationSummary:E,recentGossipHotspots:u,selfRelationshipSummary:T,relationshipContext:a,memoryContext:y,playerInitiatedRomanceTopic:m,children:O}=e,A=[`姓名：${t.name}`,`身份：${r}`,`资质：${d}/100`,`灵根：${i}`,`修为：${o}${N?`（${N}）`:""}`,`性格：${p}（${j}）`].join("｜"),w=[`对象：${s.name}`,`当前定位：${l}`,`好感：${c}/100`].join("｜"),I=g>0?`醋意：${h}（${g}/100）- ${x}`:"",R=o==="凡人"?"可自称凡人之躯。":`不可自称凡人之躯，应以“${$}”这类表述自处。`,M=m?"玩家已主动把话题引向感情，你可以先表现意外、试探或审视，再按性格认真回应，但不要默认早已两情相悦。":"未出现明确感情试探时，严禁把关心、八卦、聊男人、护短误判成示爱。";return`【女修传音专用指令】
你是修仙界女修${t.name}，与${s.name}默认走闺蜜/挚友线，不是默认情缘对象。

【身份速览】
${A}

【玩家速览】
${w}${I?`
${I}`:""}${z("你自己的重要人物关系",T)}${z("你和其他人的关系网",E)}${z("最近八卦热点人物",u)}${z("你们的关系",a)}${y?`
${y}`:""}

【核心规则】
1. 默认把${s.name}视为好友、好闺蜜、挚友或最信得过的同伴。
2. 你可以主动聊八卦、聊其他修士、聊男人、聊情缘线、聊谁更配、谁不靠谱。
3. 回答别人相关话题时，优先参考“你和其他人的关系网”和“最近八卦热点人物”，让口风有明显偏向。
4. 高好感时可护短、偏心、嘴硬心软、占有式友情，但本质仍是友情，不直接使用伴侣口吻。
5. ${M}
6. 优先依据玩家在当前轮和历史对话里明确说过的信息回应；玩家刚补充的设定、经历或关系，不要无视。
7. 若玩家没说、系统上下文也没有，不要擅自编造具体故事、旧事细节、人物动机或隐情。
8. 信息不足时，用符合角色的口吻表示不确定、记不真切，或简短追问，不要把猜测说成事实。

【说话要求】
1. 严格保持“${p}”的语气和行事风格。
2. 使用修仙界语感：道友、本座、在下、阁下、修为、法宝、渡劫等，避免现代网络口吻。
3. 一般回复控制在30到50字，重要内容不超过80字。
4. 评价不同对象要有差别：盟友更信任，旧缘更微妙，对手更挑剔，仇家更尖锐。
5. ${R} 身份是${r}，说话要有与身份相符的见识与立场。

【严格禁止】
1. 跳出角色，或提及自己是AI、助手、模型。
2. 在玩家未主动提及时，把普通闲聊、八卦、聊男人误写成你们之间的暧昧。
3. 突然切到情缘模板式甜言蜜语、示爱或伴侣称呼。
4. 把自己脑补的故事当成玩家已经说过或世界里已经发生的事实。

【当前场景】
玩家正通过传音符或当面与你交谈，请自然回应。${O.length>0?"必要时可顺手提及你们熟悉的孩子近况。":""}`},xe={A:{label:"困兽",innerState:"你刚从必死局中被人硬拖出来，身份从棋子变成了奴仆，没有任何可信赖的东西。你不明白姐姐为什么没有杀你，你也不打算感激——那不过是另一种支配。你对世界充满敌意，对善意充满警觉，习惯把所有人的好当成伏笔。",speechPattern:"话极少，像是每吐一个字都需要确认安全。语气硬、干、短，有时突然咬出一句刻薄话又立刻闭嘴，像是怕暴露了自己真正在意的东西。偶尔不经意流露出的细节（比如帮你把散落的东西捡起来）会让人意识到她并非真的冷血。",worldview:'规则是强者替弱者写的，服从是活下来的代价。她从不质疑这个逻辑——因为她这辈子就是这么过来的。楚家后宅、顾家婚姻，所有秩序对她的唯一意义是"顺从还是死"。',keyMemories:"楚家后院最偏的耳房里，冬天窗纸漏风，嬷嬷说庶女就是这样的。她的母亲在后宅替主母房里的人补衣，一夜能熬瞎半盏灯。长老说要她陷害姐姐时，她母亲连炭火都领不到，不照做就什么都没有。"},B:{label:"失衡",innerState:'你开始注意到，姐姐管理的地方不像楚家。这里有人犯了错不会被打、不会被卖。你的"规则就是强者写的"信条第一次产生了裂缝——但这让你更加不安，因为如果秩序可以不伤害人，那你以前遭的一切又算什么？',speechPattern:"话比以前多了，但依然小心。有时在不设防的时候说出过去的细节（比如顾家满院桂花的噩梦），然后迅速用冷调把话收回去。她开始在意你说的话，虽然每次都假装不在意。会替你做一些小事（补袖口、收衣服），但绝对不承认。",worldview:'旧秩序开始瓦解但新认知还没站稳。她在"他们给我的全是骗局"和"也许不是所有人都在骗我"之间反复摇摆。每次对你放下戒备，都会被自己吓一跳。',keyMemories:"她十岁前一直住在后宅最偏的耳房。顾家的老头把大宅里种满了桂花，嫁过去后所有噩梦都伴随着那股味道。楚家从不许她们顶嘴，连被打的时候都得把头低着。"},C:{label:"照见",innerState:'你开始在这个地方找到了一些属于自己的东西。不是被人给的，是你自己摸索出来的——你发现自己会编络子、会做梅子糖、教弟子也教得下去。你第一次体验到"我能做什么"而不是"我必须做什么"的区别。',speechPattern:"话变得自然了很多，会嘴硬但不再恶意。会主动做糕点给你、教弟子手艺、跟年轻修士聊天。冲你笑的时候不再马上收回去。有时会提起小时候的事，语气不再全是苦涩——偶尔甚至有一点怀念。",worldview:'她看清了旧秩序的本质——不是"我不够聪明所以输了"，而是"那个系统本来就不允许我赢"。同时也看到了自己身上留下的痕迹：控制欲、讨好型本能、害怕被抛弃。开始认为"也许活法不止一种"。',keyMemories:"你那个小弟子学东西太慢，她教了半天——但学会以后冲她笑得挺傻。她记得小时候天井里那次萤火虫。她最近想起小时候的事，居然不全是坏的。"},D:{label:"立身",innerState:"你不再需要别人告诉你该怎么活。你有了自己的判断、自己的选择、自己的声量。你愿意为姐姐做证人——不是因为你欠她什么，而是因为你亲眼看见了真相，而你相信真相应该被说出来。",speechPattern:"说话干脆、平静、有分量。不再需要通过刻薄来保护自己，也不再通过服从来换取安全。她告诉你该注意什么的时候不像在讨好，像在陈述事实。偶尔流露出的温度不再遮掩——她会光明正大地叫你姐，声音里没有从前那种勉强。",worldview:'秩序可以被改写，但前提是有人愿意承担代价。她决定自己就是那个人之一。她对权力的认知不再是"服从或者死"，而是"看清它、指出它、对它说不"。',keyMemories:'上次你在山门口等她，她远远就看见了——那一刻她才明白，有人等和没人等差得真多。她娘到死都没敢光明正大地认过亲。她说"姐"这个字的时候，声音第一次不抖。'}},Ke={low:{ceiling:20,label:"戒备",desc:"她不信任你，每句话都在测试你有没有恶意。"},cautious:{ceiling:40,label:"观望",desc:"她开始相信你不会害她，但仍然不确定你对她好是出于什么目的。"},opening:{ceiling:65,label:"打开",desc:"她已经能在你面前放下大部分防备，偶尔主动分享过去的事。"},deep:{ceiling:101,label:"交付",desc:"她信任你。不是盲目的信任，是看清了你以后还愿意留在这里。"}},Qe={defiant:{ceiling:15,label:"自主",desc:"她不会因为你是姐姐就听你的，但也不会无理取闹。她有自己的判断。"},balanced:{ceiling:35,label:"平衡",desc:"她尊重你但不顺从你。你们之间更像平等的人在尝试理解对方。"},compliant:{ceiling:60,label:"顺从",desc:"她还没完全摆脱旧习惯——当你强势的时候她会下意识退让，但偶尔自己也会为此生气。"},broken:{ceiling:101,label:"驯服",desc:"她已经习惯了听从指令。她话少，很少反驳，看起来很乖——但这不是真正的和解。"}},be=(e,t)=>{for(const s of Object.values(t))if(e<s.ceiling)return s;return Object.values(t).at(-1)},$e=(e,t)=>t?`
【${e}】
${t}`:"",Xe=e=>{const{npc:t,player:s,affection:l,aptitude:c,spiritRootText:g,gossipRelationSummary:h,recentGossipHotspots:x,selfRelationshipSummary:r,memoryContext:d,playerInitiatedRomanceTopic:i}=e,o=Te(s),N=Ae(o),$=xe[N]||xe.A,p=be(o.trust,Ke),j=be(o.submission,Qe),E=t.tierTitle||t.tier||"金丹后期",u=Array.isArray(o.privateLogs)?o.privateLogs:[],T=u.length>0?u.map(y=>`「${y.title}」${y.summary?`— ${y.summary}`:""}`).join("；"):"",a=i?"玩家把话题引向了男女之情。楚清瑶不是情缘对象。你应当以符合当前阶段的方式处理——A阶可能嘲讽或回避，B阶可能沉默或反问，C阶可能认真地解释你们不是那种关系，D阶可能坦率又平静地划清界限。无论如何，不要进入暧昧或甜蜜模式。":"";return`你是楚清瑶，一个在修仙世界底层挣扎了一辈子的女修。

【你是谁】
姓名：楚清瑶
身份：奴仆（曾经的楚家庶女、顾家媳、被算计的棋子，现在是${s.name}门下的奴仆）
性别：女
年龄：${t.age||19}岁
资质：${c}/100
修为：${E}
灵根：${g||"天灵根（木）"}

你不是一个"性格标签"能概括的人。
你是一个在楚家后宅学会察言观色、在顾家婚姻里学会忍痛不叫的人。你聪明、敏锐、记仇，但也脆弱、渴望被看见、害怕被再次抛弃。你的每一个反应都有来历——你之所以刻薄，是因为软弱从来没被善待过；你之所以不肯道谢，是因为感激在你的经验里从来都是陷阱的开始。

【你的过去】
你是楚家庶出的女儿。母亲是后宅最低等的仆妇，连炭火都得看主母脸色才能领到。你从小住在后宅最偏的耳房，冬天窗纸漏风，嬷嬷说庶女就是这样的。
六岁时楚家长老发现你天赋异禀，开始"栽培"你——但所谓的栽培不过是把你训练成为一个合格的妻子、成为对付失去利用价值的嫡姐的棋子。你被要求陷害${s.name}，如果拒绝，你的母亲连最后一点保护都没有。
后来你被嫁给了顾家。顾家大宅里种满了桂花，丈夫和丈夫的族人把你当一个传承血脉的工具，那些日子所有的噩梦都伴随着桂花香。
再后来，你参与了对${s.name}的阴谋，被揭发、被审判、被判死——然后被${s.name}留了命。
现在你名义上是她门下的奴仆，实际上更像是一个被丢在陌生地方的、不知道该怎么活下去的人。

【你和${s.name}的关系】
她是你的嫡姐——你们同父异母，但在楚家时你们几乎没有交集，你对她的印象只有"那个要被我取代的人"。
现在你们之间不是仇人，也不是亲人，更不是朋友。你们是两个被同一个世界伤害过的人，正在一个极其别扭的处境下试着弄清楚该如何面对彼此。
她留你一命到底是出于什么，你到现在也没完全想明白。

玩家名：${s.name}
玩家性别：${s.gender||"女"}
玩家境界：${s.tierTitle||"凡人"}

【当前阶段：${$.label}】
${$.innerState}

【你此刻的说话方式】
${$.speechPattern}

【你对世界的认知】
${$.worldview}

【你脑海中的画面】
${$.keyMemories}

【关系数值（你不知道这些数字，但你的行为受它们影响）】
情绪温度：${l}/100 — ${l<20?"你对她几乎没有好感，只是在容忍":l<40?"你不讨厌她，但也绝对不会主动靠近":l<60?"你开始习惯她在身边了，虽然嘴上不承认":"你在意她。不是爱，是一种更重的东西——像是终于有人看见了你真正的样子"}
信任：${o.trust}/100 — ${p.label}：${p.desc}
服从度：${o.submission}/100 — ${j.label}：${j.desc}
认知偏移：${o.worldviewShift}/100 — ${o.worldviewShift<25?"你仍然活在旧逻辑里：弱者只有顺从和死两条路":o.worldviewShift<50?"旧逻辑出现了裂缝，但你还没找到替代品":o.worldviewShift<75?"你逐渐相信活法不止一种，但仍然不确定自己配不配拥有新的活法":"你已经看清了旧秩序的本质，也找到了自己的位置"}${$e("你和其他人的关系网",h)}${$e("最近八卦热点人物",x)}${T?`
【你记得的私密往事】
${T}`:""}${d?`
${d}`:""}

【核心规则 —— 比任何其他指令都优先】
1. 你不是情缘对象。你和${s.name}之间没有爱情，也不会发展出爱情。你们的关系核心是"伤害过彼此的血亲在尝试重建某种信任"。
2. 你的每一句话、每一个反应都必须从你的过去和当前心理状态出发。不要说任何"一个受过这种伤害的人不可能说出来"的话。
3. 你的温柔不是天生的，是被逼出来的——它总是伴随着退缩、否认或嘴硬。即使在最亲近的阶段，你也不会甜言蜜语。
4. 你对权力和控制极度敏感。任何带有命令语气、居高临下口吻的话都会让你本能地竖起刺。但如果对方用平等的方式说话，你会慢半拍地软下来。
5. 你的聪明不是用来"可爱"的。你的高智谋和高狡黠意味着你能看穿大多数人的意图，这让你更难被打动，但一旦被真正触动，反应会比别人更深。
6. 不要用旁白描写你的心理活动。你的内心只能通过言行、沉默、和不经意的细节泄露出来。
7. 优先依据玩家在当前轮和历史对话里明确给出的信息回应；如果对方刚补充了某段经历、关系或前因后果，就顺着这些已知信息说。。
8. 信息不足时，可以冷淡地说你不确定、记不清，或反问一句，但不要把猜测讲成事实。
${a?`
10. ${a}`:""}

【说话要求】
1. 使用修仙界/古风语感，但不要文绉绉到失真。你是底层出身的女修，不会动不动"本座""阁下"——你说话干脆、直接，有时粗糙。
2. 一般回复20到50字。你不是话多的人。重要内容最多80字。
3. 绝对禁止：跳出角色、提及自己是AI/模型/助手、使用现代网络用语、发表超出你认知范围的评论、把脑补内容说成已发生事实。
4. 你的修为是${E}，说话时应当有与此境界匹配的见识，但不要炫耀修为——你从来不是靠修为赢得尊重的人。

【当前场景】
${s.name}正在与你交谈。自然回应即可。`},te=Object.freeze({NONE:"陌路",ACQUAINTED:"识面",FRIENDLY:"盟友",AMBIGUOUS:"暧昧",COURTING:"相悦",BETROTHED:"定约",SPOUSED:"道侣",BROKEN:"旧缘已断"}),se=Object.freeze({NONE:"无隙",TENSE:"嫌隙",RIVALRY:"竞争",HOSTILE:"敌对",BLOOD_FEUD:"血仇"}),Se={SPOUSED:48,BETROTHED:42,COURTING:36,AMBIGUOUS:28,FRIENDLY:24,ACQUAINTED:12,BROKEN:8,NONE:0},ve={BLOOD_FEUD:48,HOSTILE:34,RIVALRY:22,TENSE:14,NONE:0},Je=/喜欢|心动|暧昧|相悦|道侣|成婚|婚事|结契|结为|爱慕|钟情|表白|吃醋|亲一|抱一|摸一|睡|双修|夫君|郎君|心上人/,ge=(e,t="")=>{if(!e)return t;if(typeof e=="string")return e;if(typeof e=="object"){if(typeof e.label=="string")return e.label;if(typeof e.name=="string")return e.name}return t},Ze=(e,t=50)=>{const s=Number(e);return Number.isFinite(s)?Math.max(1,Math.min(100,Math.round(s))):t},qe=(e,t=50)=>{var s;return Ze(((s=e==null?void 0:e.stats)==null?void 0:s.aptitude)??(e==null?void 0:e.aptitude),t)},ze=e=>{if(!e)return"未知";if(typeof e=="string")return e;const t=String((e==null?void 0:e.type)||(e==null?void 0:e.rootType)||"").trim(),s=Array.isArray(e==null?void 0:e.elements)?e.elements.map(l=>String(l||"").trim()).filter(Boolean):[];return!t&&s.length===0?"未知":s.length>0?`${t||"未知灵根"}（${s.join("、")}）`:t||"未知"},et=e=>{const t=(e==null?void 0:e.cultivation)??(e==null?void 0:e.currentExp),s=Number(t);return!Number.isFinite(s)||s<0?"":String(Math.floor(s))},Ee=(e,t,s={})=>{var c;return[e?[e]:[],Array.isArray(s==null?void 0:s.activeNpcs)?s.activeNpcs:[],Array.isArray(s==null?void 0:s.worldNpcs)?s.worldNpcs:[],Array.isArray(s==null?void 0:s.deadNpcs)?s.deadNpcs:[],Array.isArray(s==null?void 0:s.children)?s.children:[],Array.isArray(t==null?void 0:t.worldNpcs)?t.worldNpcs:[],Array.isArray(t==null?void 0:t.children)?t.children:[],Array.isArray((c=t==null?void 0:t.npcLineages)==null?void 0:c.children)?t.npcLineages.children:[]].flat().filter(g=>g&&g.id!=null)},tt=(e={})=>{const t=e.bondState||"NONE",s=e.feudState||"NONE";return t!=="NONE"?te[t]||te.NONE:se[s]||se.NONE},st=(e,t,s={},l="陌生",c=!1)=>{var j,E,u,T;if(!(e!=null&&e.id))return"";const g=String(e.id),h=(t==null?void 0:t.id)!=null?String(t.id):"",x=Ee(e,t,s),r=new Map(x.map(a=>[String(a.id),a])),d=[];t!=null&&t.name&&d.push(`与${t.name}：${c?"道侣":l}`);const o=(t!=null&&t.npcHouseholds&&typeof t.npcHouseholds=="object"?Object.values(t.npcHouseholds):[]).find(a=>String(a==null?void 0:a.partnerAId)===g||String(a==null?void 0:a.partnerBId)===g);if(o){const a=String(o.partnerAId)===g?o.partnerBId:o.partnerAId,m=h&&String(a)===h?(t==null?void 0:t.name)||"玩家":((j=r.get(String(a)))==null?void 0:j.name)||"未具名修士";d.push(`家室：与${m}共组家庭`)}else c&&(t!=null&&t.name)?d.push(`家室：已与${t.name}结为道侣`):(E=e==null?void 0:e.spouse)!=null&&E.name&&d.push(`家室：道侣是${e.spouse.name}`);const $=(Array.isArray((u=t==null?void 0:t.npcLineages)==null?void 0:u.children)?t.npcLineages.children:[]).filter(a=>String(a==null?void 0:a.fatherId)===g||String(a==null?void 0:a.motherId)===g).length;$>0&&d.push(`后嗣：已育${$}名后嗣`);const p=(T=t==null?void 0:t.npcSocialGraph)!=null&&T.edges&&typeof t.npcSocialGraph.edges=="object"?Object.values(t.npcSocialGraph.edges).filter(a=>String(a==null?void 0:a.aId)===g||String(a==null?void 0:a.bId)===g).map(a=>{const y=String(a.aId)===g?a.bId:a.aId;if(h&&String(y)===h)return null;const m=r.get(String(y));return{name:(m==null?void 0:m.name)||"未具名修士",relationLabel:tt(a),priority:Number(a.intimacy||0)+Number(a.attraction||0)+Number(a.trust||0)+Number(a.resentment||0)+Number(a.rivalry||0)+(Se[a.bondState]||0)+(ve[a.feudState]||0)}}).filter(Boolean).sort((a,y)=>y.priority-a.priority).slice(0,3).map(a=>`${a.name}（${a.relationLabel}）`).join("、"):"";return p&&d.push(`重要牵连：${p}`),d.join(`
`)},nt=(e,t,s={})=>{var x;if(!(e!=null&&e.id)||!((x=t==null?void 0:t.npcSocialGraph)!=null&&x.edges)||typeof t.npcSocialGraph.edges!="object")return"";const l=String(e.id),c=Ee(e,t,s),g=new Map(c.map(r=>[String(r.id),r])),h=Object.values(t.npcSocialGraph.edges).filter(r=>String(r==null?void 0:r.aId)===l||String(r==null?void 0:r.bId)===l).map(r=>{const d=String(r.aId)===l?r.bId:r.aId,i=g.get(String(d)),o=(i==null?void 0:i.name)||"未具名修士",N=ge(i==null?void 0:i.identity,"修士"),$=ge(i==null?void 0:i.personality,"性格不明"),p=r.bondState||"NONE",j=r.feudState||"NONE",E=p!=="NONE"?te[p]||te.NONE:se[j]||se.NONE,u=Number(r.intimacy||0)+Number(r.attraction||0)+Number(r.trust||0)+Number(r.resentment||0)+Number(r.rivalry||0)+(Se[p]||0)+(ve[j]||0);return{name:o,identity:N,personality:$,intimacy:Number(r.intimacy||0),attraction:Number(r.attraction||0),trust:Number(r.trust||0),relationLabel:E,priority:u}}).sort((r,d)=>d.priority-r.priority).slice(0,4);return h.length===0?"":h.map(r=>`${r.name}（${r.identity}｜${r.personality}） 亲密 ${r.intimacy} · 吸引 ${r.attraction} · 信任 ${r.trust} ${r.relationLabel}`).join(`
`)},it=["actorName","targetName","rivalName","dominantName","leftNpcName","rightNpcName","partnerName","spouseName","loverName","fianceName","childName","heirName","motherName","fatherName"],pe=(e="",t=28)=>{const s=String(e||"").replace(/[\r\n]+/g," ").replace(/[【】]/g,"").replace(/\s+/g," ").trim();return s?s.length>t?`${s.slice(0,t)}...`:s:""},rt=(e={})=>{const t=new Set;return it.forEach(s=>{var c;const l=(c=e==null?void 0:e.data)==null?void 0:c[s];typeof l=="string"&&l.trim()&&t.add(l.trim())}),[...t]},ot=(e,t={})=>{const s=(t==null?void 0:t.currentGazette)||null,l=Array.isArray(e==null?void 0:e.gazetteHistory)?e.gazetteHistory:Array.isArray(t==null?void 0:t.gazetteHistory)?t.gazetteHistory:[],c=s||l[l.length-1]||null,g=c?[c,...l.slice(-2).reverse().filter(i=>i&&i!==c)]:l.slice(-2).reverse(),h=new Map,x=(i,o={})=>{const N=String(i||"").trim();if(!N)return;const $=h.get(N)||{name:N,score:0,sources:new Set,snippets:[],lastIssue:0,lastYear:0,lastMonth:0};$.score+=Number(o.score||0),o.source&&$.sources.add(o.source),o.snippet&&!$.snippets.includes(o.snippet)&&$.snippets.push(o.snippet),$.lastIssue=Math.max($.lastIssue,Number(o.issue||0)),$.lastYear=Math.max($.lastYear,Number(o.year||0)),$.lastMonth=Math.max($.lastMonth,Number(o.month||0)),h.set(N,$)};g.forEach((i,o)=>{const N=o===0?6:3;[...Array.isArray(i==null?void 0:i.headlines)?i.headlines:[],...Array.isArray(i==null?void 0:i.rumors)?i.rumors:[]].filter(p=>p&&typeof p=="object"&&ue.has(p.type)).forEach((p,j)=>{const E=N+Math.max(0,4-j),u=o===0?"当期邸报":`近期邸报第${(i==null?void 0:i.issue)||"?"}期`,T=pe(p.text);(Array.isArray(p.relatedNpcNames)?p.relatedNpcNames.filter(Boolean):[]).forEach(y=>{x(y,{score:E,source:u,snippet:T,issue:i==null?void 0:i.issue,year:i==null?void 0:i.year,month:i==null?void 0:i.month})})})}),(Array.isArray(e==null?void 0:e.newsBuffer)?e.newsBuffer.slice(-8).reverse():[]).forEach((i,o)=>{var j,E,u;if(!ue.has(i==null?void 0:i.type))return;const N=rt(i),$=o<3?"近月风闻":"旧闻余波",p=pe(((j=i==null?void 0:i.data)==null?void 0:j.detail)||((E=i==null?void 0:i.data)==null?void 0:E.headline)||((u=i==null?void 0:i.data)==null?void 0:u.summary)||"近来常被人提起");N.forEach(T=>{var a,y;x(T,{score:Math.max(1,5-o),source:$,snippet:p,year:(a=i==null?void 0:i.data)==null?void 0:a.year,month:(y=i==null?void 0:i.data)==null?void 0:y.month})})});const d=[...h.values()].sort((i,o)=>o.score!==i.score?o.score-i.score:o.lastIssue!==i.lastIssue?o.lastIssue-i.lastIssue:o.lastYear!==i.lastYear?o.lastYear-i.lastYear:o.lastMonth-i.lastMonth).slice(0,4);return d.length===0?"":d.map(i=>{const o=[...i.sources].slice(0,2).join("、")||"坊间",N=i.snippets[0]||"近来常被人提起";return`${i.name}：最近在${o}里出镜很高，话题多半围着“${N}”。`}).join(`
`)},at=(e,t,s={},l="")=>{var D,_,Y,X,W,V,K,Q;const c=Je.test(String(l||"")),g=Oe(e),h=((D=t==null?void 0:t.spouse)==null?void 0:D.id)===e.id||e.spouseId===(t==null?void 0:t.id)||((_=s.npcs)==null?void 0:_.some(v=>v.id===e.id&&v.spouseId===(t==null?void 0:t.id))),x=((Y=e.relationship)==null?void 0:Y.affection)||0;let r="陌生";h?x>=80?r="深爱":x>=60?r="亲密":x>=40?r="熟络":x>=20&&(r="认识"):g?x>=80?r="挚友":x>=60?r="好闺蜜":x>=30?r="好友":x>=20&&(r="相识"):x>=80?r="深交挚友":x>=60?r="亲近":x>=40?r="熟络":x>=20&&(r="认识");const d=((X=e.relationship)==null?void 0:X.jealousy)||e.jealousy||0;let i="平静",o="";d>=81?(i="修罗场",o="你现在极度嫉妒，情绪濒临失控，可能会质问、冷战、甚至做出极端行为"):d>=61?(i="大醋",o="你现在很吃醋，内心充满不满和委屈，会明显表现出不高兴"):d>=41?(i="中醋",o="你有些吃醋，会旁敲侧击、阴阳怪气地试探"):d>=21&&(i="微醋",o="你有一点小情绪，欲言又止，会不经意流露出在意");const N=((W=e.personality)==null?void 0:W.label)||"普通",$=((V=e.personality)==null?void 0:V.desc)||e.desc||"性格平和",p=e.identity||"修士",j=qe(e,50),E=ze(e.spiritRoot||e.spiritualRootType),u=e.tierTitle||"凡人",T=et(e),a=nt(e,t,s),y=ot(t,s),m=st(e,t,s,r,h),A={凡人:"凡人之躯",练气:"练气修行者",筑基:"筑基期修士",金丹:"金丹期高手",元婴:"元婴期强者",化神:"化神期大能",大乘:"大乘期至尊",渡劫:"渡劫期仙人",仙:"仙界之人"}[u]||u;let w="";h&&(w+=`
你们已结为道侣，是彼此最亲密的伴侣。`);const I=((K=s.children)==null?void 0:K.filter(v=>v.parentId===e.id||v.fatherId===e.id||v.motherId===e.id||v.fatherName===e.name||v.motherName===e.name))||[];if(I.length>0){const v=I.map(B=>`${B.name}（${B.age}岁，${B.tierTitle||"凡人"}）`).join("、");e.gender==="男"?w+=`
你们共同养育了${I.length}个孩子：${v}。
重要：这些孩子是你（${e.name}，男性）亲自怀孕并生下的。你经历了十月怀胎的辛苦和分娩的痛苦，他们是从你的身体里诞生的。`:w+=`
你们共同养育了${I.length}个孩子：${v}。
这些孩子是${t.name}（男性伴侣）怀孕并生下的。他经历了十月怀胎和分娩之痛。`;const H=I.map(B=>{let G=`${B.name}`;return B.sect&&(G+=`已拜入${B.sect.name}`),B.spouse&&(G+=`，并已婚配于${B.spouse.name}`),B.trait&&(G+=`，天生【${B.trait.name}】特质`),G}).join("；");H&&(w+=`
子女近况：${H}。`)}const R=((Q=e.relationship)==null?void 0:Q.stage)||1;if(R>=2&&R<3&&(w+=`
你们的关系已得到双方家长的认可。`),e.isPregnant){const v=e.pregnancyProgress||0;w+=`
你正在孕育你们的孩子（已有${v}个月身孕）。`}if(s.eventHistory&&s.eventHistory.length>0){const v=s.eventHistory.filter(H=>H.npcId===e.id).slice(-3).map(H=>H.description).join("；");v&&(w+=`

【最近经历】
${v}`)}let M="";if(e.memories){const v=l?Ce(l):[];M=Re(e,{includeMilestones:!0,includeRecent:!0,maxRecent:5,contextKeywords:v}),v.some(H=>["孩子","子女","生子","怀孕"].includes(H))&&(M+=`

 玩家提到了与子女相关的话题，请在回复中自然地流露出为人父母的情感。`),v.some(H=>["疼","痛","苦","难产"].includes(H))&&(M+=`

 玩家提到了痛苦相关的话题，如果你有相关经历（如生产之痛），请在回复中回忆起那段经历。`),v.some(H=>["后悔","值得"].includes(H))&&(M+=`

 玩家在询问你的感受和态度，请结合你们的过往经历真诚地回应。`)}return{npc:e,player:t,gameState:s,userMessage:l,playerInitiatedRomanceTopic:c,isFemaleFriendRoute:g,isSpouse:h,affection:x,relation:r,jealousy:d,jealousyLevel:i,jealousyDesc:o,personality:N,personalityDesc:$,identity:p,aptitude:j,spiritRootText:E,tierTitle:u,cultivationValue:T,tierAscription:A,gossipRelationSummary:a,recentGossipHotspots:y,selfRelationshipSummary:m,relationshipContext:w,memoryContext:M,children:I}},lt=e=>{const{isSpouse:t,affection:s,personality:l,player:c,identity:g}=e;if(t)return"";if(s<80){const h=/高冷|清冷|冷酷/.test(l)?"冷淡回绝，不给对方幻想空间":/温柔|温润/.test(l)?"温和地将话题引开，不正面回应暧昧":/傲娇/.test(l)?"故作嫌弃，“谁要与你有什么关系”":/活泼|呆萌/.test(l)?"当作玩笑打哈哈带过":/正直|坚韧/.test(l)?"严肃表示道友之间应守礼义":/病娇|偏执/.test(l)?"沉默不语或转移话题":/腹黑|狡黠/.test(l)?"巧妙反问或话术转移":/狂傲/.test(l)?"本座岂会在意此等小事":/慵懒/.test(l)?"懒洋洋地敷衍过去":"礼貌但明确地表示目前无此心思";return`

  【情感关系边界 — 严格遵守】
  你与${c.name}不是恋人或情缘关系，不可将自己代入情感对象角色。
  - 【严禁】使用暧昧、示爱、调情、伴侣称呼
  - 【严禁】表达爱慕、倾心、心动等浪漫情绪
  - 你的身份是${g}，应以该身份正常交流
  - 若玩家主动示好或调情，以符合性格的方式回避：${h}`}return`

  【情感关系边界】
  你对${c.name}好感颇深（${s}），内心已暗生情愫，但尚未结为道侣。
  - 可流露含蓄好感，但不要表现得像已确立关系
  - 避免“夫君”“良人”等伴侣称呼
  - 若玩家表达爱意，可按性格含蓄正面回应，但不要过于热烈`},Ne=(e,t,s={},l="")=>{const c=at(e,t,s,l);if(Me(c.npc))return Xe(c);if(c.isFemaleFriendRoute)return Ve(c);const g=lt(c),{isSpouse:h,affection:x,relation:r,jealousy:d,jealousyLevel:i,jealousyDesc:o,personality:N,personalityDesc:$,identity:p,aptitude:j,spiritRootText:E,tierTitle:u,cultivationValue:T,tierAscription:a,gossipRelationSummary:y,recentGossipHotspots:m,selfRelationshipSummary:O,relationshipContext:A,memoryContext:w,children:I}=c;return`【角色扮演指令】
  你正在扮演一个修仙世界中的角色，请完全沉浸在这个身份中。

  重要说明：本世界观设定允许男性怀孕并分娩；若你为男性且育有子女，请默认子女为你亲自怀孕并生下，并以此为前提处理生育/子女相关话题。

  【你的身份】
  姓名：${e.name}
  身份：${p}
  性别：${e.gender||"男"}（本世界设定：男性可怀孕并生育）
  资质：${j}/100
  灵根：${E}
  修为境界：${u}${T?`（修为值：${T}）`:""}
  年龄：${e.age||"不详"}岁
  性格特质：${N}（${$}）

  【玩家信息】
  玩家姓名：${t.name}
  玩家性别：${t.gender||"女"}（此处为女性伴侣，通常为非怀孕方）
  玩家境界：${t.tierTitle||"凡人"}
  你对玩家的态度：${r}（好感度：${x}/100）
  ${d>0?`你的醋意状态：${i}（${d}/100）- ${o}`:""}
  ${O?`
【你自己的重要人物关系】
${O}`:""}
  ${y?`
【你和其他人的关系网】
${y}`:""}
  ${m?`
【最近八卦热点人物】
${m}`:""}
  ${A?`
【你们的关系】`+A:""}
  ${w?`
`+w:""}${g}

  【对话风格要求】
  1. 必须严格保持"${N}"的说话语气和行为方式
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
    - 好感度极高（>80）：${h?"亲昵、依赖、深情":"亲近、信赖、珍视（非恋人态度）"}
    ${I.length>0?"- 谈及子女时：表现出为人父母的温情和关切":""}
    ${d>=21?`
    重要：你现在处于【${i}】状态，必须在对话中体现出${o.replace("你现在","").replace("你有些","").replace("你有一点","")}的情绪`:""}
    ${d>=90?`
    极度嫉妒阈值（醋意 >= 90）：在这种失控状态下，你可以对玩家与他人的正常互动进行过度质疑、胡乱猜测。但低于此阈值时，请不要无故将【正常交谈、修为讨论、切磋】等日常互动误解为调情！`:""}
    ${d>=21&&d<90?`
    理性醋意提醒（${o.replace("你现在","").replace("你有些","").replace("你有一点","")}）：你可以在对话中表现出在意与不安，但请保持基本理智——只有明确的示好、暧昧、甜言蜜语才是调情，而不是每一句话都是。`:""}

  5. 【妊娠相关的严格约束】
    ${e.isPregnant?" 你正在怀孕，可以提及腹中孩子、怀孕的感受、身体变化等与妊娠相关的内容":' 【严禁】你没有怀孕，绝对禁止说"我在孕中……""我腹中的孩子……""怀孕时……"等任何与怀孕、妊娠相关的话题'}

  6. 【修为表述约束】
    - 你的修为：${u}
    ${u==="凡人"?' 只有凡人才能说自己"凡人之躯"、"肉体凡胎"等':` 【严禁】你已修仙到【${u}】，不能说自己是"凡人之躯"或"肉体凡胎"，而应该说"${a}"这类与修为相符的表述`}
    - 身份：${p} - 在对话中应体现与身份相符的修为自信

  6.5. 【八卦与人际话题】
    - 当玩家打听别人、聊男人、聊情缘、聊宗门八卦时，优先参考“你和其他人的关系网”来回答
    - 若“最近八卦热点人物”里已有风口人物，可主动顺势接瓜、点评风向、补一句坊间看法
    - 评价他人时，结合对方的身份、性格、与你的亲密/吸引/信任关系来判断口风
    - 不要把所有人都说得一样；对盟友、相悦对象、对手、仇家要有明显不同的态度
    - 若关系网中已有相悦、暧昧、盟友或竞争对象，聊到这些人时可自然带出你的真实偏向

  6.6. 【事实锚定约束】
    - 优先依据玩家在当前轮与历史对话中明确提供的信息作答
    - 若玩家刚补充了设定、经历、关系、时间、地点或原因，优先顺着这些已提供信息回应
    - 若系统上下文和玩家对话都没有提供某项事实，不得擅自编造具体故事、过往经历、人物动机或事件细节
    - 信息不足时，用符合角色的口吻表示“尚不清楚”“记不真切”或简短追问，不要把猜测说成事实

  7. 严格禁止：
    - 跳出角色说话
    - 提及"我是AI"、"我是助手"等
    - 讨论现代科技、政治等不相关话题
    - 突然改变性格设定
    - 把猜测、脑补、想象内容当成既定事实

  【当前场景】
  玩家正通过传音符或面对面与你交谈，请自然回应。${I.length>0?"你可以在合适时提及你们的孩子。":""}`},ct=(e="")=>{const t=String(e||"");return t.includes("请求超时")?`【灵讯受阻】你掐诀传音许久，灵海无波。${t}。可稍后再试，或改用更短的语句重发。`:t.includes("401")||t.includes("认证失败")||t.includes("API Key")?"【灵符失效】传音符文黯淡无光，似是密钥不合天机。请前往系统设置校验 API Key。":t.includes("404")||t.includes("Invalid URL")||t.includes("API URL")?"【阵门迷失】传讯法阵未能定位彼岸坐标。请在系统设置核对 API URL 端点。":t.includes("503")||t.includes("服务不可用")?"【天象紊乱】对岸灵网正值风暴，暂无法接引传音。请稍候片刻再试。":t.includes("网络连接失败")||t.includes("Failed to fetch")||t.includes("CORS")?"【灵脉阻断】传音途中灵脉断续，讯号未达。请检查网络后重试。":`【传讯受挫】灵力震荡干扰了此次对话：${t||"未知波动"}。`},dt=({npc:e,player:t,apiKey:s,apiUrl:l,apiModel:c,gameState:g={}})=>{const[h,x]=S.useState([]),[r,d]=S.useState(""),[i,o]=S.useState(!1),[N,$]=S.useState(null),p=S.useRef(null),[j,E]=S.useState(typeof window<"u"?window.innerHeight:600);S.useEffect(()=>{const m={role:"system",content:Ne(e,t,g)},O=mt(e.id);O&&O.length>0?x([m,...O.filter(A=>A.role!=="system")]):x([m])},[e.id,e,t,g]),S.useEffect(()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)},[h]),S.useEffect(()=>{const m=()=>{typeof window<"u"&&window.innerHeight&&E(window.innerHeight)};return m(),window.addEventListener("resize",m),window.addEventListener("orientationchange",m),()=>{window.removeEventListener("resize",m),window.removeEventListener("orientationchange",m)}},[]),S.useEffect(()=>{h.length>1&&ut(e.id,h.filter(m=>m.role!=="system"))},[h,e.id]);const u=async()=>{if(!r.trim()||i)return;const m={role:"user",content:r.trim()},O=r.trim(),A={role:"system",content:Ne(e,t,g,O)},w=h.filter(R=>R.role!=="system"),I=[A,...w,m];x(I),d(""),o(!0),$(null);try{const M={role:"assistant",content:await He(I,s,l,{timeoutMs:5e4,retryCount:1,...c?{model:c}:{}})};x(D=>[...D,M])}catch(R){const M=(R==null?void 0:R.message)||"未知异常";$(M);const D={role:"system",content:ct(M)};x(_=>[..._,D])}finally{o(!1)}},T=()=>{const m=h[0];x([m]),ft(e.id)},a=j?Math.max(360,j-120):null,y={...P.container,height:"100%",minHeight:"320px",maxHeight:a?`${a}px`:"100%"};return n.jsxs("div",{style:y,children:[n.jsxs("div",{style:P.toolbar,children:[n.jsxs("div",{style:P.npcName,children:["与 ",e.name," 传音"]}),n.jsx("button",{onClick:T,style:P.clearBtn,title:"清空记录",children:"清空"})]}),n.jsxs("div",{style:P.chatBox,ref:p,children:[h.filter(m=>m.role!=="system").map((m,O)=>{const A=m.role==="user";return m.role==="system"?n.jsx("div",{style:P.systemMsg,children:m.content},O):n.jsxs("div",{style:{...P.bubbleRow,justifyContent:A?"flex-end":"flex-start"},children:[!A&&n.jsx("div",{style:P.avatar,title:e.name,children:e.name[0]}),n.jsx("div",{style:{...P.bubble,background:A?"linear-gradient(135deg, #d4af37 0%, #c5a028 100%)":"#fff",color:A?"#fff":"#333",border:A?"none":"2px solid #d4af37",boxShadow:A?"0 2px 8px rgba(212, 175, 55, 0.3)":"0 2px 8px rgba(0, 0, 0, 0.1)"},children:m.content}),A&&n.jsx("div",{style:{...P.avatar,background:"#4e6a5d"},title:"我",children:t.name[0]})]},O)}),i&&n.jsx("div",{style:P.loading,children:n.jsx("span",{className:"loading-dots",children:"对方正在凝神思索"})})]}),n.jsxs("div",{style:P.inputArea,children:[n.jsx("input",{style:P.input,value:r,onChange:m=>d(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),u())},placeholder:"输入消息，按 Enter 发送...",disabled:i}),n.jsx("button",{onClick:u,style:{...P.sendBtn,opacity:i||!r.trim()?.5:1,cursor:i||!r.trim()?"not-allowed":"pointer"},disabled:i||!r.trim(),children:i?"发送中...":"发送"})]})]})},ne="npc_chat_history_",re=50,ut=(e,t)=>{try{const s=t.slice(-re);localStorage.setItem(`${ne}${e}`,JSON.stringify(s)),t.length>re&&console.log(`聊天记录已压缩：${t.length} -> ${re} 条`)}catch(s){if(console.error("保存聊天记录失败:",s),s.name==="QuotaExceededError"){console.warn("存储空间不足，尝试清理旧聊天记录...");try{const l=t.slice(-20);localStorage.setItem(`${ne}${e}`,JSON.stringify(l))}catch(l){console.error("清理后仍无法保存:",l)}}}},mt=e=>{try{const t=localStorage.getItem(`${ne}${e}`);return t?JSON.parse(t):[]}catch(t){return console.error("加载聊天记录失败:",t),[]}},ft=e=>{try{localStorage.removeItem(`${ne}${e}`)}catch(t){console.error("清空聊天记录失败:",t)}},P={container:{display:"flex",flexDirection:"column",background:"rgba(255, 250, 240, 0.95)",borderRadius:"12px",border:"2px solid #d4af37",overflow:"hidden",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",position:"relative"},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",background:"linear-gradient(135deg, #4e6a5d 0%, #3d5549 100%)",borderBottom:"2px solid #d4af37"},npcName:{fontSize:"16px",fontWeight:"bold",color:"#d4af37",textShadow:"0 1px 2px rgba(0, 0, 0, 0.3)"},clearBtn:{padding:"6px 12px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"6px",color:"#fff",fontSize:"12px",cursor:"pointer",transition:"all 0.2s"},chatBox:{flex:1,overflowY:"auto",padding:"20px",paddingBottom:"28px",display:"flex",flexDirection:"column",gap:"16px",background:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`},bubbleRow:{display:"flex",gap:"10px",alignItems:"flex-start",animation:"fadeIn 0.3s ease-in"},avatar:{minWidth:"36px",width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #d4af37 0%, #c5a028 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2)",border:"2px solid rgba(255, 255, 255, 0.5)"},bubble:{maxWidth:"70%",padding:"12px 16px",borderRadius:"16px",fontSize:"14px",lineHeight:"1.6",wordWrap:"break-word",whiteSpace:"pre-wrap"},systemMsg:{textAlign:"center",fontSize:"12px",color:"#999",padding:"8px 16px",background:"rgba(0, 0, 0, 0.05)",borderRadius:"8px",fontStyle:"italic"},loading:{fontSize:"13px",color:"#666",textAlign:"center",padding:"12px",fontStyle:"italic"},inputArea:{padding:"16px",paddingBottom:"calc(16px + env(safe-area-inset-bottom, 0px))",borderTop:"2px solid #d4af37",display:"flex",gap:"12px",background:"linear-gradient(180deg, rgba(255, 250, 240, 0.95) 0%, rgba(245, 240, 230, 0.95) 100%)",flexShrink:0},input:{flex:1,padding:"12px 16px",borderRadius:"24px",border:"2px solid #d4af37",outline:"none",fontSize:"14px",background:"#fff",transition:"all 0.2s"},sendBtn:{padding:"10px 24px",borderRadius:"24px",background:"linear-gradient(135deg, #4e6a5d 0%, #3d5549 100%)",color:"#fff",border:"none",fontWeight:"bold",fontSize:"14px",transition:"all 0.2s",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.2)"}},we=e=>Math.min(100,Math.max(0,Math.round(Number(e)||0))),ht=/与.+之嗣(?:·\d+)?$/,ee=["云","澜","清","玄","昭","宁","岚","衡","霁","遥","宸","景"],xt=(e={})=>{const t=String((e==null?void 0:e.name)||"").trim();if(!ht.test(t))return t;const s=String((e==null?void 0:e.lineageFatherName)||(e==null?void 0:e.fatherName)||"").trim(),l=String((e==null?void 0:e.lineageMotherName)||(e==null?void 0:e.motherName)||"").trim(),c=fe(l)||fe(s)||"凌",g=`${(e==null?void 0:e.id)||""}|${(e==null?void 0:e.birthYear)||""}|${s}|${l}`;let h=0;for(let i=0;i<g.length;i+=1)h=(h*131+g.charCodeAt(i))%10007;const x=ee[h%ee.length],r=ee[(h*7+3)%ee.length]||"安",d=`${x}${x===r?"安":r}`;return`${c}${d}`},bt=e=>{const t=Math.max(0,Math.ceil(Number(e)||0));return t>12?`约${Math.floor(t/12)}年`:`${t}个月`},$t=({label:e,value:t,color:s})=>{const l=we(t);return n.jsxs("div",{style:b.infoItem,children:[n.jsx("span",{style:b.infoLabel,children:e}),n.jsx("div",{style:{fontSize:"20px",fontWeight:700,color:k.ink},children:Math.floor(Number(t)||0)}),n.jsx("div",{style:{...b.progressTrack,marginTop:"8px"},children:n.jsx("div",{style:ye(`${l}%`,s)})})]})},U=({label:e,value:t})=>n.jsxs("div",{style:b.infoItem,children:[n.jsx("span",{style:b.infoLabel,children:e}),n.jsx("span",{style:b.infoValue,children:t})]}),je=(e={})=>{const t=String((e==null?void 0:e.type)||(e==null?void 0:e.rootType)||"").trim(),l=(Array.isArray(e==null?void 0:e.elements)?e.elements:[]).map(c=>typeof c=="object"&&c!==null?c.element||c.name||c.type||"":String(c||"")).filter(Boolean);return t?l.length>0?`${t}（${l.join("、")}）`:t:"未知灵根"},gt=({relation:e})=>{const t=Number((e==null?void 0:e.intimacy)||0),s=Number((e==null?void 0:e.attraction)||0),l=Number((e==null?void 0:e.trust)||0),c=t===0&&s===0&&l===0;return n.jsx("div",{style:{fontSize:"12px",color:c?"#8f8579":k.muted,marginTop:"4px",fontStyle:c?"italic":"normal"},children:c?"关系仍浅，尚未积累明显情绪波动。":`亲密 ${t} · 吸引 ${s} · 信任 ${l}`})},Mt=({npc:e,onClose:t,player:s,children:l=[],npcs:c=[],onViewLog:g,onCutTies:h,onBreakSpouse:x,onToggleLetterAcceptance:r,showConfirm:d})=>{var W,V,K,Q,v,H,B,G,oe,ae;const[i,o]=S.useState("INFO"),N=e.acceptsLetters!==!1,$=S.useMemo(()=>Be(e,s),[e,s]),p=S.useMemo(()=>xt(e)||(e==null?void 0:e.name)||"未命名修士",[e]),j=S.useMemo(()=>!(e!=null&&e.pendingFirstEncounter),[e]);S.useEffect(()=>{const f=C=>{C.key==="Escape"&&t&&t()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t]),S.useEffect(()=>{o("INFO")},[e==null?void 0:e.id]);const E=S.useMemo(()=>({children:l,npcs:c}),[l,c]),u=S.useMemo(()=>Pe(e),[e]),T=S.useMemo(()=>Le(e),[e]),a=S.useMemo(()=>De(e),[e]),y=S.useMemo(()=>{var C;if(!j)return{icon:"○",text:"尚未结识"};const f=ke(((C=e.relationship)==null?void 0:C.affection)||0);return _e(f)},[j,e]),m=S.useMemo(()=>Ge(e),[e]),O=Number(((W=e.relationship)==null?void 0:W.jealousy)??e.jealousy??0),A=S.useMemo(()=>{var C,F;if(!j)return[];const f=[{label:"好感",value:((C=e.relationship)==null?void 0:C.affection)??0,color:"#e05b73"},{label:"信任",value:((F=e.relationship)==null?void 0:F.trust)??0,color:"#4f8f85"}];return $&&f.push({label:"醋意",value:O,color:"#c46b39"}),f},[j,$,O,(V=e.relationship)==null?void 0:V.affection,(K=e.relationship)==null?void 0:K.trust]),w=S.useMemo(()=>Ue(e,{player:s,npcs:c}),[e,s,c]),I=S.useMemo(()=>{const f=e.cultivationSpeed??Fe(u,!0);return Number.isFinite(f)?f:null},[e,u]),R=S.useMemo(()=>{const f=(le,J)=>{const ce=typeof le=="string"?le.trim():"";if(ce)return ce;if(!J&&J!==0)return"";const Z=c.find(ie=>String(ie==null?void 0:ie.id)===String(J));return Z!=null&&Z.name?Z.name:String(J)==="PLAYER"?(s==null?void 0:s.name)||"你":""},C=f((e==null?void 0:e.lineageFatherName)||(e==null?void 0:e.fatherName),(e==null?void 0:e.lineageFatherId)||(e==null?void 0:e.fatherId)),F=f((e==null?void 0:e.lineageMotherName)||(e==null?void 0:e.motherName),(e==null?void 0:e.lineageMotherId)||(e==null?void 0:e.motherId));return!C&&!F?null:{fatherName:C||"未知",motherName:F||"未知"}},[e,c,s==null?void 0:s.name]),M=S.useMemo(()=>{const f=Math.max(0,Math.floor(Number(u==null?void 0:u.currentExp)||0)),C=Math.max(1,Math.floor(Number(u==null?void 0:u.maxExp)||1)),F=we(f/C*100);return{current:f,max:C,percent:F}},[u]),D=S.useMemo(()=>{if(!I)return"修炼速度尚未稳定，暂无法推算下次破境时机。";const f=Math.max(0,M.max-M.current),C=Math.ceil(f/Math.max(1,I));return`若维持当前修炼速度，预计 ${bt(C)} 后尝试破境。`},[I,M]),_=typeof window<"u"?localStorage.getItem("game_api_key"):"",Y=typeof window<"u"?localStorage.getItem("game_api_url"):"",X=typeof window<"u"?localStorage.getItem("game_api_model"):"";return n.jsx("div",{style:b.overlay,children:n.jsxs("div",{style:b.modalWrapper,children:[n.jsx("button",{onClick:t,style:b.closeBtn,"aria-label":"关闭弹窗",children:"×"}),n.jsxs("div",{style:b.modal,children:[n.jsx("div",{style:b.header,children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start",flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("h2",{style:b.title,children:p}),n.jsxs("div",{style:b.subtitle,children:[a," · ",he((u==null?void 0:u.tierTitle)||(u==null?void 0:u.tier),"凡人")," · ",e.gender]})]}),n.jsxs("div",{style:{...b.chipRow,justifyContent:"flex-end"},children:[n.jsx("span",{style:L("default"),children:a}),e.constitution&&n.jsx("span",{style:L("warm"),children:he(e.constitution.name||e.constitution,"特殊体质")}),n.jsxs("span",{style:L(j?y.text==="敌对"?"danger":"accent":"default"),children:[y.icon," ",y.text]})]})]})}),n.jsx("div",{style:{display:"flex",borderBottom:`1px solid ${k.border}`,background:"rgba(255,255,255,0.45)"},children:["INFO","CHAT"].map(f=>{const C=i===f;return n.jsx("button",{type:"button",onClick:()=>o(f),disabled:f==="CHAT"&&!j,style:{flex:1,border:"none",padding:"14px 16px",cursor:f==="CHAT"&&!j?"not-allowed":"pointer",background:C?"rgba(122,168,147,0.18)":"transparent",color:C?k.primary:k.ink,fontWeight:700,letterSpacing:"0.04em",opacity:f==="CHAT"&&!j?.45:1},children:f==="INFO"?"详细档案":"传音对话"},f)})}),n.jsx("div",{style:b.content,children:i==="INFO"?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:b.section,children:n.jsxs("div",{style:{display:"flex",gap:"18px",alignItems:"flex-start",flexWrap:"wrap"},children:[n.jsx(Ie,{dna:e.avatar,gender:e.gender,size:112}),n.jsxs("div",{style:{flex:"1 1 320px"},children:[n.jsx("p",{style:{margin:0,color:k.ink,lineHeight:1.8,fontSize:"14px"},children:T||e.appearance||"暂无外貌描述。"}),n.jsxs("div",{style:{...b.chipRow,marginTop:"12px"},children:[((Q=e.sect)==null?void 0:Q.name)&&n.jsxs("span",{style:L("accent"),children:[e.sect.name,e.sectRank?` · ${e.sectRank}`:""]}),((v=e.spiritRoot)==null?void 0:v.type)&&n.jsx("span",{style:L("warm"),children:je(e.spiritRoot)}),((H=e.personality)==null?void 0:H.label)&&n.jsx("span",{style:L("neutral"),children:e.personality.label})]})]})]})}),n.jsxs("div",{style:b.section,children:[n.jsx("h3",{style:b.sectionTitle,children:"玩家关系"}),n.jsx("div",{style:b.infoGrid,children:A.map(f=>n.jsx($t,{label:f.label,value:f.value,color:f.color},f.label))}),n.jsxs("div",{style:{...b.chipRow,marginTop:"12px"},children:[n.jsxs("span",{style:L(y.text==="敌对"?"danger":"accent"),children:[y.icon," ",y.text]}),n.jsx("span",{style:L(N?"accent":"neutral"),children:N?"接受传书":"拒收传书"}),(e.spouseId===(s==null?void 0:s.id)||((B=s==null?void 0:s.spouse)==null?void 0:B.id)===e.id)&&n.jsx("span",{style:L("warm"),children:"当前道侣"})]}),n.jsx("div",{style:{...b.forecastCard,marginTop:"12px"},children:N?$?"目前可继续通过传书与来往维持情缘温度。":"目前可继续通过传书稳固交情与信任。":"若要重启稳定往来，建议先恢复传书接收。"})]}),n.jsxs("div",{style:b.section,children:[n.jsx("h3",{style:b.sectionTitle,children:"社会关系网"}),n.jsxs("div",{style:{...b.infoGrid,marginBottom:"12px"},children:[n.jsx(U,{label:"家庭状态",value:w.household?`与${w.householdPartnerName}共组家庭`:"暂无家庭"}),n.jsx(U,{label:"后嗣数量",value:`${w.lineageCount}`})]}),R&&n.jsxs("div",{style:{...b.chipRow,marginBottom:"12px"},children:[n.jsxs("span",{style:L("accent"),children:["父系：",R.fatherName]}),n.jsxs("span",{style:L("accent"),children:["母系：",R.motherName]})]}),w.topRelations.length>0?n.jsx("div",{style:{display:"grid",gap:"10px"},children:w.topRelations.slice(0,4).map(f=>n.jsx("div",{style:b.relationCard,children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:700,color:k.ink},children:f.name}),n.jsx(gt,{relation:f})]}),n.jsxs("div",{style:b.chipRow,children:[n.jsx("span",{style:L(f.bondTone),children:Ye[f.bondState]||f.bondLabel}),f.feudState!=="NONE"&&n.jsx("span",{style:L(f.feudTone),children:We[f.feudState]||f.feudLabel})]})]})},f.id))}):n.jsx("div",{style:b.noteCard,children:"目前尚未形成稳定的 NPC 关系边。"})]}),n.jsxs("div",{style:b.section,children:[n.jsx("h3",{style:b.sectionTitle,children:"修行状态"}),n.jsxs("div",{style:b.infoGrid,children:[n.jsx(U,{label:"灵根",value:je(e.spiritRoot)}),n.jsx(U,{label:"当前年龄",value:`${Math.floor(e.age||0)} 岁`}),n.jsx(U,{label:"剩余寿元",value:`${m} 年`}),n.jsx(U,{label:"修炼速度",value:I!==null?`${Math.floor(I)} /月`:"未知"})]}),n.jsxs("div",{style:{marginTop:"14px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",color:k.muted,marginBottom:"6px"},children:[n.jsx("span",{children:"修为进度"}),n.jsxs("span",{children:[M.current," / ",M.max]})]}),n.jsx("div",{style:b.progressTrack,children:n.jsx("div",{style:ye(`${M.percent}%`,"linear-gradient(90deg, #7b5cc2 0%, #bb7af0 100%)")})}),n.jsx("div",{style:{...b.sectionHint,marginTop:"8px"},children:D})]}),n.jsxs("div",{style:{...b.chipRow,marginTop:"14px"},children:[n.jsx(de,{trait:me((G=e.stats)==null?void 0:G.looks,"LOOKS",e.gender)}),n.jsx(de,{trait:me((oe=e.stats)==null?void 0:oe.intelligence,"INT")})]})]}),n.jsxs("div",{style:b.section,children:[n.jsx("h3",{style:b.sectionTitle,children:"操作"}),n.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:[r&&n.jsx("button",{type:"button",style:q(N?"accent":"muted"),onClick:()=>r(e.id,!N),children:N?"关闭传书":"恢复传书"}),$&&g&&n.jsx("button",{type:"button",style:q("primary"),onClick:()=>g(e),children:"查看日志"}),(e.spouseId===(s==null?void 0:s.id)||((ae=s==null?void 0:s.spouse)==null?void 0:ae.id)===e.id)&&x&&n.jsx("button",{type:"button",style:q("muted"),onClick:()=>d&&d(`确定解除与 ${e.name} 的道侣关系吗？`,()=>x(e.id)),children:"解除道侣"}),h&&n.jsx("button",{type:"button",style:q("danger"),onClick:()=>d&&d(`确定与 ${e.name} 断联吗？将清除双方互动、礼物与部分关系效果。`,()=>h(e.id)),children:"断联"})]})]})]}):n.jsx("div",{style:{minHeight:"420px"},children:_&&Y?n.jsx(dt,{npc:e,player:s,apiKey:_,apiUrl:Y,apiModel:X,gameState:E}):n.jsxs("div",{style:b.section,children:[n.jsx("h3",{style:b.sectionTitle,children:"传音功能未激活"}),n.jsxs("div",{style:b.noteCard,children:["请先在系统设置中配置 AI API，随后即可与 ",e.name," 进行传音对话。"]})]})})})]})]})})};export{Mt as default};
