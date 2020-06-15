// 语言(language): 默认(default) 简体中文(zh-CN)
module.exports = {
	// 进入副本提示文(Into Dungeon Tip-Msg)
	DungeonInfo : [
		{zone: 9066, string: '进入副本 <font color="#56B4E9">岱魔鲁斯的轮盘</font>'},
		{zone: 9059, string: '进入副本 <font color="#56B4E9">伯恩斯坦恶灵岛</font> <font color="#E69F00">下级</font>'},
		{zone: 9759, string: '进入副本 <font color="#56B4E9">伯恩斯坦恶灵岛</font> <font color="#00FFFF">上级</font>'},
		{zone: 9767, string: '进入副本 <font color="#56B4E9">费勒诺的实验室</font> <font color="#E69F00">下级</font>'},
		{zone: 9067, string: '进入副本 <font color="#56B4E9">费勒诺的实验室</font> <font color="#00FFFF">上级</font>'},
		{zone: 9770, string: '进入副本 <font color="#56B4E9">拉坎里斯的废墟</font> <font color="#E69F00">下级</font>'},
		{zone: 9970, string: '进入副本 <font color="#56B4E9">拉坎里斯的废墟</font> <font color="#00FFFF">上级</font>'},
		{zone: 9781, string: '进入副本 <font color="#56B4E9">贝里克神殿</font> <font color="#E69F00">下级</font>'},
		{zone: 9981, string: '进入副本 <font color="#56B4E9">贝里克神殿</font> <font color="#00FFFF">上级</font>'},
		{zone: 9735, string: '进入副本 <font color="#56B4E9">RK-9机库</font> <font color="#E69F00">下级</font>'},
		{zone: 9935, string: '进入副本 <font color="#56B4E9">RK-9机库</font> <font color="#00FFFF">上级</font>'},
		{zone: 9739, string: '进入副本 <font color="#56B4E9">革命团总部</font> <font color="#E69F00">下级</font>'},
		{zone: 9939, string: '进入副本 <font color="#56B4E9">革命团总部</font> <font color="#00FFFF">上级</font>'},
		{zone: 9720, string: '进入副本 <font color="#56B4E9">安塔洛斯的深渊</font> <font color="#E69F00">下级</font>'},
		{zone: 9920, string: '进入副本 <font color="#56B4E9">安塔洛斯的深渊</font> <font color="#00FFFF">上级</font>'},
		{zone: 3017, string: '进入副本 <font color="#56B4E9">安塔洛斯的深渊</font> <font color="#FF0000"> 7人</font>'},
		{zone: 9783, string: '进入副本 <font color="#56B4E9">泰内布利斯城堡</font> <font color="#E69F00">下级</font>'},
		{zone: 9983, string: '进入副本 <font color="#56B4E9">泰内布利斯城堡</font> <font color="#00FFFF">上级</font>'},
		{zone: 3018, string: '进入副本 <font color="#56B4E9">泰内布利斯城堡</font> <font color="#FF0000"> 7人</font>'},
		{zone: 9782, string: '进入副本 <font color="#56B4E9">里安的地下殿堂</font> <font color="#E69F00">下级</font>'},
		{zone: 9982, string: '进入副本 <font color="#56B4E9">里安的地下殿堂</font> <font color="#00FFFF">上级</font>'},
		{zone: 3019, string: '进入副本 <font color="#56B4E9">里安的地下殿堂</font> <font color="#FF0000"> 7人</font>'},
		{zone: 9044, string: '进入副本 <font color="#56B4E9">巴哈勒神殿</font>'},
		{zone: 3101, string: '进入副本 <font color="#56B4E9">费尔奎娜巢穴</font> <font color="#E69F00">下级</font>'},
		{zone: 3201, string: '进入副本 <font color="#56B4E9">费尔奎娜巢穴</font> <font color="#00FFFF">上级</font>'},
		{zone: 3023, string: '进入副本 <font color="#56B4E9">贝尔亚克城堡</font>'},
		{zone: 3020, string: '进入副本 <font color="#56B4E9">金鳞号</font>'},
		{zone: 3026, string: '进入副本 <font color="#56B4E9">凯尔赛克隐藏地</font> <font color="#E69F00">下级</font>'},
		{zone: 3126, string: '进入副本 <font color="#56B4E9">凯尔赛克隐藏地</font> <font color="#00FFFF">上级</font>'},
		{zone: 3027, string: '进入副本 <font color="#56B4E9">狂气竞技场</font>'},
		
		
		{zone: 3102, string: '进入副本 <font color="#56B4E9">司令官修練場</font> <font color="#E69F00">下级</font>'},
		{zone: 3202, string: '进入副本 <font color="#56B4E9">憤怒的司令官修練場</font> <font color="#00FFFF">上级</font>'}
	],
	// 岱魔鲁斯的轮盘 (Demon's Wheel)
	DW_BOSS_1 : [
		{id: 105, msg: '跳跃(眩晕)'},
		{id: 106, msg: '尾气(击退)'},
		{id: 109, msg: '前砸(晕坦)'},
		{id: 110, msg: '甩尾(中毒)'},
		// > 50%
		{id: 306, msg: '+1圈'},
		{id: 307, msg: '+2圈'},
		{id: 308, msg: '+3圈'},
		{id: 309, msg: '+4圈'},
		{id: 310, msg: '+5圈'},
		// < 50%
		{id: 319, msg: '+1圈'},
		{id: 320, msg: '+2圈'},
		{id: 321, msg: '+3圈'},
		{id: 322, msg: '+4圈'},
		{id: 323, msg: '+5圈'},
		// 鉴定 - 计算总圈数(双数为蓝/单数为红)
		{id: 311, msg: '↓ 出圈 ↓'}, // 王-红buff
		{id: 315, msg: '↓ 出圈 ↓'}, // 王-红buff
		{id: 313, msg: '↓ 出圈 ↓'}, // 王-蓝buff
		{id: 317, msg: '↓ 出圈 ↓'}, // 王-蓝buff
		// 相同进圈 不同出圈
		{id: 312, msg: '↑ 进圈 ↑'}, // 王-红buff
		{id: 316, msg: '↑ 进圈 ↑'}, // 王-红buff
		{id: 314, msg: '↑ 进圈 ↑'}, // 王-蓝buff
		{id: 318, msg: '↑ 进圈 ↑'}  // 王-蓝buff
	],
	DW_TipMsg1: ["双(蓝)", "单(红)"],
	DW_BOSS_2 : [
		{id: 113, msg: '激光!!'},
		{id: 116, msg: '拉人(群体)'},
		// 217 蓝圈 - 1次伤害
		{id: 223, msg: '红圈 - 2次伤害'},
		{id: 303, msg: '打投掷'},
		{id: 309, msg: '进场 | 王举(蓝)球时 进圈'},
		{id: 310, msg: '进场 | 王举(红)球时 进圈'},
		// 王举(蓝)球
		{id: 311, msg: '↑ 进圈(蓝) ↑'},
		{id: 313, msg: '↓ 出圈(蓝) ↓'},
		// 王举(红)球
		{id: 314, msg: '↑ 进圈(红) ↑'},
		{id: 312, msg: '↓ 出圈(红) ↓'}
	],
	DW_TipMsg2: [
		"Next -> ",
		"红(顺) | (蓝+白)", "白(顺) | (红+蓝)", "蓝(顺) | (红+白)", // 466050   466051   466052
		"全部!!",
		"红(逆)",           "白(逆)",           "蓝(逆)"            // 466054   466055   466056
	],
	// 伯恩斯坦恶灵岛 (Forsaken Island)
	FI_BOSS_1 : [
		{id: 1104, msg: '大跳(眩晕)'},
		{id: 2104, msg: '大跳(眩晕)'},
		{id: 1106, msg: '旋转攻击'},
		{id: 2106, msg: '旋转攻击'},
		{id: 3107, msg: '点名(前方击退)'}
		// 3111 诅咒
		// 3106 鉴定-外圈爆炸
		// 3101 鉴定-内圈爆炸
	],
	FI_BOSS_2 : [
		{id: 3101, msg: '跳跃(击退)'},
		{id: 3102, msg: '黄圈x5(闪避)'},
		{id: 3104, msg: '全屏攻击!!'},
		{id: 3105, msg: '拉拢 | 推开'},
		{id: 3107, msg: '毒圈x1(闪避)'}
	],
	FI_BOSS_3 : [
		{id: 1101, msg: '← 扩散 →'},
		{id: 2101, msg: '← 扩散 →'},
		{id: 1102, msg: '→ 拉拢 ←'},
		{id: 2102, msg: '→ 拉拢 ←'},
		/* 
		{id: 1106, msg: '小心地毯'}, // 前方导弹
		{id: 2106, msg: '小心地毯'},
		{id: 1107, msg: '小心地毯'}, // 后方导弹
		{id: 2107, msg: '小心地毯'},
		{id: 1108, msg: '小心地毯'}, // 右方导弹
		{id: 2108, msg: '小心地毯'},
		{id: 1109, msg: '小心地毯'}, // 左方导弹
		{id: 2109, msg: '小心地毯'},
		 */
		{id: 1110, msg: '↓ 雷电 ↓'},
		{id: 2110, msg: '↓ 雷电 ↓'},
		
		{id: 3105, msg: '点名(闪避)'},
		{id: 3108, msg: '诅咒x2'},
		{id: 3109, msg: '地毯鉴定'}
	],
	FI_TipMsg : ["诅咒 | 内外圈", "诅咒x2", "小心激光!"],
	// 费勒诺的实验室 (Demokron Factory)
	DF_BOSS_1 : [
		
	],
	DF_BOSS_2 : [
		
	],
	DF_BOSS_3 : [
		{id: 205, msg: '击退(慢慢慢)'},
		{id: 218, msg: '击退'},
		{id: 211, msg: '扩散 (内->外)'},
		{id: 212, msg: '收缩 (外->内)'},
		{id: 219, msg: '内外同时'}
	],
	// 拉坎里斯的废墟 (Ruinous Manor)
	RM_BOSS_1 : [
		{id: 107, msg: '前喷(坦)'}
	],
	RM_BOSS_2 : [
		{id: 106, msg: '插地(眩晕)'},
		{id: 111, msg: '连续攻击(不可挡)'}
	],
	RM_BOSS_3 : [
		// 102 101 103          后喷
		{id: 103, msg: '后喷(打手)'},
		// 101 102 104 105     不推
		// 101 102 104 106 107 推坦
		{id: 106, msg: '前推(坦)'},
		{id: 110, msg: '尾巴横扫!!'}, // 108 110 111
		// 317 分散吃球
		// 319 分散吃球 愤怒
		{id: 113, msg: '↓ 出圈 ↓'}, // 113  114 115
		{id: 116, msg: '↑ 进圈 ↑'}, // 116  117 118
		// < 30% 
		{id: 311, msg: '蓄力推人!!'},
		{id: 322, msg: '命运!!(补师解王buff)'}
	],
	// 贝里克神殿 (Velik's Sanctuary)
	VS_BOSS_1 : [
		{id: 301, msg: '沉默(全体)'},
		{id: 304, msg: '内外圈'},
		{id: 401, msg: '挥刀→→→ →→ →'},
		{id: 402, msg: '← ←← ←←←挥刀'}
	],
	VS_BOSS_2 : [
		{id: 106, msg: '↓ 后砸 ↓'},
		{id: 108, msg: '↑ 前砸 ↑'},
		{id: 131, msg: '挥刀→→→ →→ →'},
		{id: 130, msg: '← ←← ←←←挥刀'},
		{id: 134, msg: '注视'}
	],
	VS_BOSS_3 : [
		{id: 116, msg: '前盾砸(晕坦)|甜甜圈(击飞)'},
		{id: 138, msg: '滚开!!'},
		{id: 144, msg: '↓ 外圈安全 ↓'},
		{id: 145, msg: '↑ 内圈安全 ↑'},
		// 149 前刺(坦)
		{id: 151, msg: '↓ 砸地(眩晕) + 点名(三抓)'},
		{id: 152, msg: '前砸(眩晕) | 后踢(击退)'},
		{id: 701, msg: '后扫(击退) | 前戳(闪避)'},
		{id: 103, msg: '闪电 (分)'},
		{id: 301, msg: '炸弹 (集) | 净化'},
		{id: 404, msg: '注视 (近)'},
		{id: 105, msg: '闪电 (集)'},
		{id: 302, msg: '炸弹 (集) | 加血'},
		{id: 405, msg: '注视 (远)'},
		{id: 401, msg: '驱散!!'},
		{id: 402, msg: '晕王!!'}
	],
	//            0           1           2           3           1+3=4       2+3=5       3+3=6
	VS_TipMsg : ["Next -> ", "注(近x2)", "闪(分散)", "炸(解掉)", "注(远x2)", "闪(集中)", "炸(加血)"],
	// RK-9机库 (RK-9 Kennel)
	RK_BOSS_1 : [
		{id: 104, msg: '→ 前夹(晕坦) ←'},
		{id: 112, msg: '↓ 后砸 ↓'},
		{id: 304, msg: '开场 | 内圈爆炸!!'},
		{id: 305, msg: '开场 | 外圈爆炸!!'},
		{id: 306, msg: '拆炸弹!!'},
		{id: 307, msg: '拉人(群体)'},
		{id: 309, msg: '跳跳跳!!'},
		// 上级披萨鉴定
		{id: 315, msg: '↑↗ 前右'}, // 1
		{id: 319, msg: '↑↗ 前右'},
		{id: 311, msg: '↗↗ 右上'}, // 2
		{id: 323, msg: '↗↗ 右上'},
		{id: 312, msg: '↘↘ 右下'}, // 3
		{id: 324, msg: '↘↘ 右下'},
		{id: 316, msg: '↓↘ 后右'}, // 4
		{id: 320, msg: '↓↘ 后右'},
		{id: 313, msg: '↙↓ 后左'}, // 5
		{id: 321, msg: '↙↓ 后左'},
		{id: 317, msg: '↙↙ 左下'}, // 6
		{id: 325, msg: '↙↙ 左下'},
		{id: 318, msg: '↖↖ 左上'}, // 7
		{id: 322, msg: '↖↖ 左上'},
		{id: 314, msg: '↖↑ 前左'}, // 8
		{id: 326, msg: '↖↑ 前左'}
	],
	RK_BOSS_2 : [
		{id: 102, msg: '前砸(中毒)'},
		{id: 108, msg: '后喷(击退)'},
		{id: 105, msg: '旋转(击退)'},
		// 上级
		{id: 305, msg: '吸附(靠近)'},
		{id: 304, msg: '爆炸(远离)!!'}
	],
	RK_BOSS_3 : [
		{id: 117, msg: 'S拳 左手 ←←'}, // 117 121 123
		{id: 118, msg: 'S拳 左手 ←←'}, // 118 121 123
		{id: 116, msg: 'S拳 →→ 右手'}, // 116 120 122
		{id: 119, msg: 'S拳 →→ 右手'}, // 119 120 122
		{id: 128, msg: '火箭拳 | 后喷'},
		// 128 129 火箭拳 | 130 131 后喷
		{id: 321, msg: '破盾!!'},
		{id: 323, msg: '雷达!!'},
		{id: 324, msg: '内圈眩晕'}
		// 305 鉴定
	],
	RK_TipMsg : ["Next -> ", "近", "远", "全", "BOSS将会在10S内出护盾"],
	// 革命团总部 (Red Refuge)
	RR_BOSS_1 : [
	
	],
	RR_BOSS_2 : [
		{id: 119, msg: '前喷'},
		{id: 120, msg: '后喷'}
	],
	RR_BOSS_3 : [
		{id: 115, msg: '怒吼(眩晕)!!'},
		{id: 175, msg: '真·怒吼(眩晕)'},
		{id: 201, msg: '真·面目(闪避)'}
	],
	// 安塔洛斯的深渊 (Antaroth's Abyss)
	AA_BOSS_1 : [
		{id: 116, msg: '↓ 出圈 ↓'},
		{id: 117, msg: '↑ 进圈 ↑'},
		{id: 300, msg: '~我要飞得更高~'}
	],
	AA_BOSS_2 : [
		{id: 119, msg: '诅咒!!'}
	],
	AA_BOSS_3 : [
		{id: 104, msg: '后砸'},
		{id: 113, msg: '前砸 | 后砸'},
		{id: 202, msg: '后撤 | 转圈'},
		{id: 109, msg: '挥刀→→→ →→ →'},
		{id: 111, msg: '← ←← ←←←挥刀'},
		{id: 310, msg: '水波'},
		{id: 311, msg: '水波'},
		{id: 312, msg: '水波'},
		{id: 313, msg: '水波'},
		{id: 314, msg: '水波'},
		{id: 400, msg: '幻影x3 剑气'}, // 三幻影-剑气 205 500 400 204 204
		{id: 401, msg: '幻影x3 转圈'}  // 三幻影-转圈 205 500 401 115 309
	],
	// 泰内布利斯城堡 (Dark Reach Citadel)
	DRC_BOSS_1 : [
		{id: 108, msg: '后跳(眩晕)'},
		{id: 109, msg: '后扫(击退)'},
		{id: 119, msg: '蓄力捶地'},
		{id: 127, msg: '雷电!!'}
	],
	DRC_BOSS_2 : [
		{id: 105, msg: '点名(击飞)'},
		{id: 110, msg: '前砸(闪避)'},
		{id: 111, msg: '右后踢(击退)'},
		{id: 115, msg: '左后踢(击退)'},
		{id: 119, msg: '跳跃(眩晕)'},
		{id: 120, msg: '前拳 | 后踢(击退)'},
		{id: 316, msg: '火焰(爆炸)'},
		{id: 317, msg: '水波(击飞)'},
		{id: 318, msg: '地毯(眩晕)'}
	],
	DRC_BOSS_3 : [
		{id: 106, msg: '前推(击退)'},
		{id: 109, msg: '前插(眩晕)'},
		{id: 112, msg: '后扫(击退)'},
		{id: 301, msg: '地刺(击飞)'},
		{id: 303, msg: '→→→→ 右'},
		{id: 306, msg: '左 ←←←←'},
		{id: 309, msg: '注视!!'},
		{id: 315, msg: '恐惧(吸血)'}
	],
	DRC_TipMsg : ["100%能量!!"],
	// 里安的地下殿堂 (Grotto of Lost Souls)
	GLS_BOSS_1 : [
		{id: 106, msg: '重击(坦)'},
		{id: 107, msg: '后喷(击退)'},
		{id: 109, msg: '滚石(小)'},
		{id: 110, msg: '滚石(大)'},
		{id: 116, msg: '全屏攻击!!'},
		{id: 301, msg: '食人花(眩晕)'},
		{id: 307, msg: '笼子(禁锢)'},
		{id: 309, msg: '1朵花-鉴定!!'},
		{id: 310, msg: '2朵花-鉴定!!'},
		{id: 312, msg: '金色花!!'}
	],
	GLS_BOSS_2 : [
		{id: 105, msg: '翻滚'},
		{id: 113, msg: '双手(眩晕)'},
		{id: 114, msg: '三连地板(靠近)'},
		{id: 116, msg: '前砸|后砸'},
		{id: 301, msg: '↓ 捶地(远离) | 旋转(击退)'},
		{id: 302, msg: '↑ 旋转(靠近) | 捶地(击飞)'}
	],
	GLS_BOSS_3 : [
		{id: 118, msg: '三连击(左-右-喷)'},
		{id: 143, msg: '左后 →→'},
		{id: 145, msg: '左后 →→'},
		{id: 146, msg: '左后(扩散) →→'},
		{id: 154, msg: '左后(扩散) →→'},
		{id: 144, msg: '←← 右后'},
		{id: 147, msg: '←← 右后'},
		{id: 148, msg: '←← 右后(扩散)'},
		{id: 155, msg: '←← 右后(扩散)'},
		{id: 161, msg: '后砸 | 前砸'},
		{id: 162, msg: '后砸 | 前砸'},
		{id: 213, msg: '尾巴!!'},
		{id: 215, msg: '尾巴!!'},
		{id: 139, msg: '←← 王的左侧安全 (顺)'}, //151
		{id: 150, msg: '←← 王的左侧安全 (顺)'}, //151
		{id: 141, msg: '(逆) 王的右侧安全 →→'}, //153
		{id: 152, msg: '(逆) 王的右侧安全 →→'}, //153
		{id: 300, msg: '一次觉醒(推人)', level_Msg: ['一层!', '二层!!', '三层!!!', '<font color="#FF0000">爆炸!!!!</font>']},
		{id: 399, msg: '二次觉醒(推人)', level_Msg: ['一层!', '<font color="#FF0000">爆炸!!</font>']},
		{id: 360, msg: '爆炸!! 爆炸!!'}
	],
	// 巴哈勒神殿 (Bahaar's Sanctum)
	BS_BOSS : [
		{id: 103, msg: '前砸(闪避)'},
		{id: 111, msg: '后砸(慢慢慢慢)'},
		{id: 137, msg: '后砸(闪避)'},
		{id: 139, msg: '转圈(击倒)'},
		{id: 308, msg: '第1次晕'},
		{id: 309, msg: '第2次晕'},
		{id: 310, msg: '第3次晕'},
		
		{id: 119, msg: '挥刀→→→ →→ →'},
		{id: 120, msg: '← ←← ←←←挥刀'},
		{id: 311, msg: '补师开盾'},
		{id: 312, msg: '补师开盾'},
		{id: 131, msg: '左 范围(挡) | 后拉'}, // 131 132 134
		{id: 125, msg: '右 前砸(闪) | 后拉'}, // 125 126 127
		{id: 101, msg: '锤地->270->重击'}, // 101 105
		{id: 121, msg: '左  (4连半月)'},
		{id: 122, msg: '左  第3下加速'},
		{id: 123, msg: '左  第2下加速'},
		{id: 140, msg: '右  (4连半月)'},
		{id: 141, msg: '右  第3下加速'},
		{id: 142, msg: '右  第2下加速'},
		
		{id: 114, msg: '捶地(秒杀)'},
		{id: 116, msg: '甜甜圈'},
		{id: 112, msg: '完美格挡'},
		{id: 135, msg: '完美格挡'}
	],
	BS_TipMsg : ["四连半月(就绪)", "以[暈眩技能]阻止震怒的暴風施展", `<font color="#FF0000">红眼射线(秒杀)</font>`],
	// 费尔奎娜巢穴 (Gossamer Vault)
	GV_BOSS_1 : [
		{id: 124, msg: '前砸(晕坦)'},
		{id: 104, msg: '(慢) 前砸(晕坦)'},
		{id: 133, msg: '跳扑(击飞)'},
		{id: 113, msg: '(慢) 跳扑(击飞)'},
		{id: 138, msg: '跳扑(击飞)'},
		{id: 118, msg: '(慢) 跳扑(击飞)'},
		// 147 向前连续攻击
		{id: 149, msg: '左手蓄力(击飞)'},
		{id: 148, msg: '右手蓄力(击飞)'},
		
		{id: 127, msg: '|直线后喷|'},
		{id: 107, msg: '(慢) |直线后喷|'},
		{id: 131, msg: '后喷'},
		{id: 111, msg: '(慢) 后喷'},
		{id: 132, msg: '← 左右喷射 →'},
		{id: 112, msg: '(慢) ← 左右喷射 →'},
		{id: 139, msg: '↑ 前后喷射 ↓'},
		{id: 119, msg: '(慢) ↑ 前后喷射 ↓'},
		{id: 314, msg: '内外圈'},
		{id: 313, msg: '(慢) 内外圈'},
		
		{id: 305, msg: 'Pizza'}, // 143 / 145
		
		{id: 312, msg: '全屏(击退)'},
		{id: 311, msg: '(慢) 全屏(击退)'}
	],
	GV_BOSS_2 : [
		{id: 105, msg: '前刺'}, // 104 105
		{id: 109, msg: '闪避(慢慢慢)'},
		{id: 108, msg: '前插 | 后喷(击退)'},
		{id: 228, msg: '补师加血'},
		{id: 227, msg: '爆炸(闪避)!!'},
		{id: 230, msg: '花粉爆炸!!'},
		{id: 231, msg: '↓ 出圈 ↓'},
		{id: 232, msg: '↑ 进圈 ↑'},
		{id: 235, msg: '注视!!'},
		{id: 236, msg: '点名(前方击退)'}
	],
	// 贝尔亚克城堡 (Akalath Quarantine)
	AQ_BOSS_1 : [
		{id: 1104, msg: '大跳(眩晕)'},
		{id: 2104, msg: '大跳(眩晕)'},
		{id: 1110, msg: '前插(眩晕)'},
		{id: 2110, msg: '前插(眩晕)'},
		{id: 1111, msg: '↓ 左拉'},
		{id: 1113, msg: '↓ 左拉'}, // 1112 1113
		{id: 2111, msg: '↓ 左拉'},
		{id: 2113, msg: '↓ 左拉'}, // 2112 2113
		{id: 1112, msg: '右拉 ↓'},
		{id: 1114, msg: '右拉 ↓'}, // 1111 1114
		{id: 2112, msg: '右拉 ↓'},
		{id: 2114, msg: '右拉 ↓'}, // 2111 2114
		{id: 1115, msg: '后半圈'},
		{id: 2115, msg: '后半圈'},
		{id: 1116, msg: '爆炸(开盾)!!'}, // 1117
		{id: 2116, msg: '爆炸(开盾)!!'}, // 2117
		{id: 3107, msg: '点名(前方击退)'},
		{id: 3115, msg: '旋转攻击'}, // 1106 2106
		{id: 3116, msg: '小圈 | 旋转攻击'}, // 1106 2106
		{id: 3119, msg: '诅咒 ', TIP: ["↓ 出 ↓", "↑ 进 ↑"]}, // 红出 | 蓝进
		{id: 3220, msg: '诅咒 ', TIP: ["↑ 进 ↑", "↓ 出 ↓"]}  // 红进 | 蓝出
	],
	AQ_BOSS_2 : [
		{id: 164, msg: '蓄力反击(流血)'},
		{id: 166, msg: '转身点名'}, // 169 166 前搓 左购拳 右勾拳
		{id: 175, msg: '怒吼(眩晕)!!'},
		{id: 181, msg: '插地板(直线)'},
		// 214 插地板x3 181
		{id: 182, msg: '踩地(击倒)'}, // 183 184
		// 302 209 点名-踩地(击倒) 182 183 184
		{id: 185, msg: '爆炸(开盾)!!'},
		{id: 202, msg: '后退 | 前刺'},  // 177
		{id: 207, msg: '幻影x5(流血)'}, // 204 206 205
		{id: 212, msg: '闪现(流血)'}    // 180
	],
	// 金麟號 (Sailing Instance)
	SI_BOSS_1 : [
		{id: 104, msg: '吸蓝(闪避)'}
	],
	SI_BOSS_2 : [
		{id: 103, msg: '吸蓝(闪避)'}
	],
	SI_BOSS_3 : [
		{id: 108, msg: '蓄力(晕坦)'},
		{id: 128, msg: '高尔夫(击飞)'},
		{id: 129, msg: '随仇-直线骷髅'},
		{id: 135, msg: "跳绳"},
		{id: 204, msg: "30% 变身"},
		{id: 137, msg: '扩散'},
		{id: 139, msg: '收缩'},
		{id: 133, msg: '扩散(击飞)'},
		{id: 127, msg: '后擒 ', TIP: ["↑ 转圈 ↑", "↓ 前砸 ↓"]},
		
		{id: 121, msg: ''},         // 前砸(外) | 转圈(内) (绿)_来吧  +No.1 buff
		{id: 122, msg: ''},         // 转圈(内) | 前砸(外) (紫)_滚开  +No.1 buff
	//  {id: 124, msg: '前砸'},     // 第一击 / 第二击
	//  {id: 125, msg: '转圈'},     // 第一击 / 第二击
		{id: 123, msg: ''},         // 蓄力前砸 | ↓(外)↓ (绿)_爆炸  +No.2 buff
		{id: 120, msg: ''},         // 蓄力转圈 | ↑(内)↑ (紫)_深渊  +No.2 buff
	//  {id: 126, msg: '大前砸'},  // 第三击
	//  {id: 134, msg: '大转圈'},  // 第三击
	],
	//           121+120=241 122+120=242            121+123=244 122+123=245
	SI_TipMsg : ["外-内-内", "内-外-内", "闪避!!!", "外-内-外", "内-外-外"],
	// 凯尔赛克隐藏地 (Corrupted Skynest)
	CK_BOSS : [
		// 120 猛烈的咆哮
		// 162 猛烈的咆哮
		// 106 前方-驴打滚
		// 156 前方-驴打滚
		// 205 前方跳跃(回避)
		// 206 后方跳跃(闪避)
		// 131 广域1实例
		{id: 103, msg: '尾巴(击飞!!)'},
		{id: 153, msg: '尾巴(击飞!!)'},
		{id: 108, msg: '右转(击退!!)'},
		{id: 158, msg: '右转(击退!!)'},
		{id: 109, msg: '左转(击退!!)'},
		{id: 159, msg: '左转(击退!!)'},
		{id: 118, msg: '~我要飞得更高~'},
		{id: 160, msg: '~我要飞得更高~'},
		{id: 137, msg: '[暴走]凯克·赛克 积蓄力量'},
		{id: 138, msg: '大范围 击退!!'},
		{id: 110, msg: '火炎DOT(远离)'},
		{id: 112, msg: '冰柱DOT(远离)'},
		{id: 114, msg: '前方 火坑DOT(远离)'},
		{id: 139, msg: '[温度] 60° 全体(火)'},
		{id: 140, msg: '[温度] 40° 全体(冰)'},
		// 164 [温度] 100° 全灭
		// 165 [温度] 0° 全灭
	// 切换DeBuff:
		// 101 右脚(火_闪避)
		// 151 右脚(火_闪避)
		// 102 左脚(冰_格挡)
		// 152 左脚(冰_格挡)
		// 107 双脚_快
		// 157 双脚_快
		{id: 145, msg: '双脚_慢(眩晕)'},
		{id: 104, msg: 'AOE-寒冰魔法(大)'},
		{id: 154, msg: 'AOE-寒冰魔法(小)'},
		{id: 105, msg: 'AOE-火焰魔法(大)'},
		{id: 155, msg: 'AOE-火焰魔法(小)'},
	// 内外鉴定:
		{id: 212, msg: '先内火 后内冰'}, // 212 -> 141(火爪)
		{id: 213, msg: '先内冰 后内火'}, // 213 -> 143(冰爪)
		{id: 214, msg: '先内冰 后内火'}, // 214 -> 142(火爪)
		{id: 215, msg: '先内火 后内冰'}, // 215 -> 144(冰爪)
	// 以下未知:
	/* 	{id: 119, msg: '微弱的咆哮'},
		{id: 161, msg: '微弱的咆哮'},
		{id: 124, msg: '弱高空落下'},
		{id: 163, msg: '弱高空落下'},
		
		{id: 116, msg: '（火焰布雷斯用）活力四射'},// "(화염브레스용)액티브무브_Run_노멀"
		{id: 117, msg: '火焰布鲁斯'},// "화염브레스_breath_노멀"
		
		{id: 121, msg: '复活诅咒'},// "부활저주_SpwanNpc_노멀"
		{id: 122, msg: '召唤部下'},// "부하소환_reactionAtk_노멀"
		{id: 123, msg: '等待-磁增益法术'},// "자기버프_Wait_노멀"
		
		{id: 125, msg: '近身禁止 发动'},// "근거리금지_발동_SpawnNpc_노멀"
		{id: 126, msg: '远程禁止 发动'},// "원거리금지_발동_SpawnNpc_노멀"
		{id: 127, msg: '禁止恢复 发动'},// "회복금지_발동_SpawnNpc_노멀"
		{id: 128, msg: '近身禁止 结束'},// "근거리금지_종료_SpawnNpc_노멀"
		{id: 129, msg: '远程禁止 结束'},// "원거리금지_종료_SpawnNpc_노멀"
		{id: 130, msg: '禁止恢复 结束'},// "회복금지_종료_SpawnNpc_노멀"
		
		{id: 132, msg: '目标召唤(475)'},// "오브젝트소환(475)_aggrochange_노말"
		{id: 133, msg: '目标召唤(3026)'},// "오브젝트소환(3026)_aggrochange_노말"
		{id: 134, msg: '广域一人奴隶'},// "광역1인노예_aggrochange_노말"
		
		{id: 135, msg: '[暴走]凯克·萨克 强悍的咆哮'},// "[폭주]켈사이크_강한포효_Roar_노멀"
		{id: 136, msg: '[暴走]凯克·赛克 环形动作'},// "[폭주]켈사이크_루프동작_노멀"
		
		{id: 150, msg: '移动-活跃的'},// "액티브무브_Run_노멀"
		{id: 201, msg: '呼哧呼哧动作'},// "헉헉동작_Groggy_노멀"
		{id: 204, msg: '换人'},// "어그로체인지_aggrochange_노멀"
		{id: 209, msg: '模式提醒'},// "모드알람_ModeAlarm_더미"
		{id: 210, msg: '赞助动作'},// "스폰동작_Spawn_노멀"
		{id: 211, msg: '旋转结束用'},// "회전종료용_ModeAlarm_노멀"
		{id: 302, msg: '随机Buff'}// "무적버프_wait_노멀" */
	],
	//            0     1     2      3
	CK_TipMsg : ["↑进↑", "↓出↓", "左内-安全", "右内-安全"],
	// 狂气竞技场 (Forbidden Arena)
	FA_BOSS : [
		{id: 108, msg: '一刀(慢)'},    // 101 121 122 連續攻擊 -> 108 一刀兩斷(坦)
		{id: 355, msg: '下巴粉碎'},    // 102 121 103 連續攻擊 -> 355 右手蓄力 -> 114 下巴粉碎
		{id: 135, msg: '一刀(慢)'},    //         104 連續攻擊 -> 135 左手蓄力 -> 130 一刀兩斷
		{id: 111, msg: '眩晕 | 一刀'}, //         104 連續攻擊 -> 111 刀背打擊 -> 130 一刀兩斷
		{id: 112, msg: '后跳 | 一刀'}, //     121 102 連續攻擊 -> 112 後退踢擊 -> 130 一刀兩斷
		{id: 109, msg: '前跳 | 一刀'},         // 109 向下劈擊 -> 402 等待     -> 130 一刀兩斷
		
		{id: 116, msg: '完美格挡'},    // 116 斬擊
		{id: 140, msg: '完美格挡'},    // 140 斬擊
		
		{id: 145, msg: '3圈 | 斩击'},  // 145 重擊斬 139 迴旋砍擊x2 -> 140 斬擊
		{id: 136, msg: '2圈 | 一刀'},  // 136 重擊斬 144 迴旋砍擊x1 -> 130 一刀兩斷
		
		{id: 141, msg: '回旋 | 一刀'}, // 141 破壞氣魄+迴旋砍擊x2 -> 146 114 130
		{id: 146, msg: '下巴 | 一刀'}, // 146 一刀兩斷       -> 114 下巴粉碎 -> 130 一刀兩斷
		{id: 142, msg: '回旋 | 下巴'}, // 142 破壞氣魄+迴旋砍擊x2 -> 143 114 130
		{id: 143, msg: '一刀'},        // 143 一刀兩斷(取消) -> 114 下巴粉碎 -> 130 一刀兩斷
		
		{id: 151, msg: '三斩 | 一刀'}, // 151 149 148三斬 -> 130 一刀兩斷
		{id: 117, msg: '瞬闪(点名)'},  //    117 瞬閃点名 -> 130 一刀兩斷
		{id: 356, msg: '瞬闪(点名)'},  //    356 瞬閃点名 -> 147 一刀兩斷
		{id: 134, msg: '要害(转身)'},  //    134 要害攻擊 -> 147 一刀兩斷
		
		{id: 357, msg: '紫-> 爆炸(远离)'}, // 357 吸收力量 -> 110 起身攻擊 -> 氣斬
		{id: 350, msg: '红-> 甜甜圈'},     // 350 吸收力量                 -> 302 甜甜圈
		
		{id: 351, msg: '破盾!!'},       // 护盾开始 环形爆发
		{id: 401, msg: '30% 全屏爆炸(闪避)!!'}    // 开始
	],
	FA_TipMsg : ["鉴定(就绪)!!"],
	
	// 司令官修炼场 ()
	new_BOSS : [
		
	]
}
