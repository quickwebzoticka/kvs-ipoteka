<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?$APPLICATION->ShowTitle();?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1"/>
        <link rel="shortcut icon" href="/favicon.ico">
     	<?$APPLICATION->ShowHead();?>
		<?
		$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/vendor/jquery-2.1.4.min.js"); 
		$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/vendor/jquery3.3.1.min.js");
		
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH.'/js/vendor/datatables/jquery.dataTables.min.css');
		$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/js/vendor/datatables/jquery.dataTables.min.js'); 
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/js/vendor/fancybox/source/jquery.fancybox.css");
		$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/vendor/fancybox/source/jquery.fancybox.js");
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/js/vendor/fancybox-master/dist/jquery.fancybox.min.css");
		$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/vendor/fancybox-master/dist/jquery.fancybox.min.js");
        $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH."/js/tiny-slider.js");
        $APPLICATION->AddHeadScript('/local/templates/new-index-2015-inner/js/scripts1.js');
		$APPLICATION->AddHeadScript("/local/templates/.default/js/masked-input.js"); 
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/styles_new.css", true);
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/js/vendor/bxSlider/jquery.bxslider.min.css");
		$APPLICATION->SetAdditionalCSS("https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.0.0/magnific-popup.min.css");
		$APPLICATION->AddHeadScript('/local/templates/.default/js/table.js');
		$APPLICATION->SetAdditionalCSS('/local/templates/.default/components/bitrix/news/register/bitrix/news.list/.default/style.css');
		$APPLICATION->AddHeadScript('/reestr_sro/reestr.js');
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/font-awesome.min.css");
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/normalize.css");
		/*$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/skin.min.css");*/
//		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."styles.css");
		$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH."/css/responsive.css?v=21-04-2017", true);
		$APPLICATION->SetAdditionalCSS("/local/templates/new-index-2015-inner/css/slick/slick.css?v=06-07-2017");
		$APPLICATION->SetAdditionalCSS("/local/templates/new-index-2015-inner/css/slick/slick-theme.css");
		//$APPLICATION->SetAdditionalCSS('/local/templates/new-index-2015/css/responsive.css?v=23-02-2017', true);
		$APPLICATION->SetAdditionalCSS('/local/templates/.default/components/bitrix/form.result.new/online/style.css');
		$APPLICATION->AddHeadScript('/local/templates/.default/components/bitrix/form.result.new/online/script.js');
		$APPLICATION->AddHeadScript('/local/templates/sodstr/components/infoservice/calculator/online-form/script.js');
		$APPLICATION->AddHeadScript('http://underscorejs.ru/underscore-min.js'); 
		$APPLICATION->AddHeadScript('/local/templates/sodstr/js/jquery.dataTables.grouping.js');
		$APPLICATION->AddHeadScript('/local/components/infoservice/calendar/templates/.default/js/glDatePicker.js');
		$APPLICATION->AddHeadScript('/local/templates/new-index-2015-inner/js/slick/slick.min.js');
        $APPLICATION->SetAdditionalCSS('/local/templates/new-index-2015-inner/css/style.css');

        ?>
        <link rel="stylesheet" href="/local/templates/new-index-2015-inner/sodstro20/style.css?v=3">
        <link rel="stylesheet" href="/local/templates/new-index-2015-inner/sodstro20/style2.css?=3">
	<style>
        /*.menu ul li a[href="/vstuplenie_v_sro/"],
        .menu ul li a[href="/membership/NRS/"] {
            color: #769bda;
        }*/
		.pos > ul:nth-child(1) > li:nth-child(2) {
			/*border:1px solid #fff;*/
			background:#d91e18 !important;
			border-top:1px solid #fff;
			border-bottom:1px solid #fff;

		}
		.pos > ul:nth-child(1) > li:nth-child(2) .root-item-selected {
			/*border:1px solid #fff;*/
			background:#d91e18 !important;
			padding: 0px 0px 0px 35px;
			width:265px;

		}
		.pos li .root-item-selected {
			background:#37578d !important;
            padding: 10px 0px 10px 35px;
			width:265px;

}
       .green {color:#2ecc71;}
		@media all and (min-width: 1280px){
			.top-contact {font-size:23px;}
		}
		@media all and (max-width: 1279px){

			.top-contact .fa {display:none;}
			}
    </style>
</head>
<body>
<!--Start of PopMechanic script-->
<script id="popmechanic-script" src="https://static.popmechanic.ru/service/loader.js?c=2282"></script>
<!--End of PopMechanic script-->
<!-- Yandex.Metrika counter -->
<script type="text/javascript" data-skip-moving="true">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter12105325 = new Ya.Metrika({
            	id:12105325,
            	webvisor:true,
            	clickmap:true,
            	accurateTrackBounce:true,
            	triggerEvent:true
            });
            w.yaCounter12105325.addFileExtension(['doc', 'doc', 'ico']);
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/12105325" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
<script data-skip-moving="true">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47609220-1', 'auto');
  ga('send', 'pageview');

</script>
<?if ( CSite::InGroup( array(1,10,11) ) )
	$APPLICATION->ShowPanel();
?>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
 <div class="body">
     <!-- New header -->
     <header class="page-header">
         <div class="page-header__info">
             <div class="page-header__logo">
                 <a href="/" class="logo">
                     <img alt="" src="<?=SITE_TEMPLATE_PATH?>/img/logo_narrow.svg">
                 </a>
             </div>
             <div class="page-header__info-menu">
                 <?$APPLICATION->IncludeComponent(
                     "bitrix:menu",
                     "headerTop",
                     array(
                         "COMPONENT_TEMPLATE" => "headerTop",
                         "ROOT_MENU_TYPE" => "headerTop",
                         "MENU_CACHE_TYPE" => "N",
                         "MENU_CACHE_TIME" => "3600",
                         "MENU_CACHE_USE_GROUPS" => "Y",
                         "MENU_CACHE_GET_VARS" => array(
                         ),
                         "MAX_LEVEL" => "1",
                         "CHILD_MENU_TYPE" => "left",
                         "USE_EXT" => "N",
                         "DELAY" => "N",
                         "ALLOW_MULTI_SELECT" => "N"
                     ),
                     false
                 );?>
<!--                 <ul class="menu-simple">-->
<!--                     <li class="menu-simple__item">-->
<!--                         <a href="#" class="menu-simple__link">Документация</a>-->
<!--                     </li>-->
<!--                     <li class="menu-simple__item">-->
<!--                         <a href="#" class="menu-simple__link">Вопросы/ответы</a>-->
<!--                     </li>-->
<!--                     <li class="menu-simple__item">-->
<!--                         <a href="#" class="menu-simple__link">Реестр членов</a>-->
<!--                     </li>-->
<!--                     <li class="menu-simple__item">-->
<!--                         <a href="#" class="menu-simple__link">Новости</a>-->
<!--                     </li>-->
<!--                 </ul>-->
             </div>
             <div class="page-header__contacts">
                 <ul class="contacts">
                     <li class="contacts__item">
                         <a href="tel:88126066165" class="contacts__phone">
                             <span class="ico"><img src="/local/templates/sodstr-19/img/ico/phone_black.svg" alt="" /></span>
                             8 (812) 606-61-65
                         </a>
                     </li>
                     <li class="contacts__item"><a href="#callback" class="contacts__callback" title="Заказ обратного звонка" onclick="ga('send', 'event', 'orderPhone', 'hitted'); yaCounter12105325.reachGoal('header-click');" data-fancybox>Заказать звонок</a></li>
                 </ul>
             </div>
         </div>
         <button type="button" class="page-header__menu-toggler button-burger">
             <span class="button-burger__line"></span>
             <span class="button-burger__line"></span>
             <span class="button-burger__line"></span>
         </button>
         <nav class="page-header__menu">
<!--             <ul class="menu-main">-->
<!--                 <li class="menu-main__item menu-main__item_primary menu-main__item_active">-->
<!--                     <a href="#" class="menu-main__link">Вступление в СРО</a>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">СРО на снос</a>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">СРО для техзаказчика</a>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">НРС</a>-->
<!--                 </li>-->
<!--             </ul>-->
             <?$APPLICATION->IncludeComponent(
                 "bitrix:menu",
                 "headerLeft",
                 array(
                     "COMPONENT_TEMPLATE" => "headerLeft",
                     "ROOT_MENU_TYPE" => "headerLeftMain",
                     "MENU_CACHE_TYPE" => "N",
                     "MENU_CACHE_TIME" => "3600",
                     "MENU_CACHE_USE_GROUPS" => "Y",
                     "MENU_CACHE_GET_VARS" => array(
                     ),
                     "MAX_LEVEL" => "1",
                     "CHILD_MENU_TYPE" => "left",
                     "USE_EXT" => "N",
                     "DELAY" => "N",
                     "ALLOW_MULTI_SELECT" => "N"
                 ),
                 false
             );?>
             <?$APPLICATION->IncludeComponent("bitrix:menu", "headerRight", Array(
	"COMPONENT_TEMPLATE" => "horizontal_multilevel",
		"ROOT_MENU_TYPE" => "headerRightMain",	// Тип меню для первого уровня
		"MENU_CACHE_TYPE" => "N",	// Тип кеширования
		"MENU_CACHE_TIME" => "3600",	// Время кеширования (сек.)
		"MENU_CACHE_USE_GROUPS" => "Y",	// Учитывать права доступа
		"MENU_CACHE_GET_VARS" => "",	// Значимые переменные запроса
		"MAX_LEVEL" => "2",	// Уровень вложенности меню
		"CHILD_MENU_TYPE" => "leftchild",	// Тип меню для остальных уровней
		"USE_EXT" => "Y",	// Подключать файлы с именами вида .тип_меню.menu_ext.php
		"DELAY" => "N",	// Откладывать выполнение шаблона меню
		"ALLOW_MULTI_SELECT" => "N",	// Разрешить несколько активных пунктов одновременно
	),
	false
);?>

<!--             <ul class="menu-main">-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">Новым членам</a>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">Преимущества</a>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">Об ассоциации</a>-->
<!---->
<!--                     <ul class="menu-main__submenu">-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/">Об Ассоциации</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/organi/">Органы Ассоциации</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/direction/">Дирекция</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/members/">Члены Ассоциации</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/info/">Обязательная информация</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/otzivy/">Отзывы о СРО</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/litsenziya-sro/">Лицензия СРО</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/sro-stroitelstvo/">СРО строительство</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/smi-about-accociation/">СМИ об Ассоциации</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/vacancies/">Вакансии</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/chlenstvo_v_inyh_organizaciyah/">Членство в иных организациях</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/contacts/">Контакты и реквизиты</a></li>-->
<!--                     </ul>-->
<!--                 </li>-->
<!--                 <li class="menu-main__item">-->
<!--                     <a href="#" class="menu-main__link">Контакты</a>-->
<!---->
<!--                     <ul class="menu-main__submenu">-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/contacts/rekvizity-assotsiatsii-sro-sodruzhestvo-stroiteley/">Реквизиты Ассоциации СРО "Содружество Строителей"</a></li>-->
<!--                         <li class="menu-main__item"><a class="menu-main__link" href="/about/contacts/offices/">Контакты офисов</a></li>-->
<!--                     </ul>-->
<!--                 </li>-->
<!--             </ul>-->
         </nav>
     </header>
     <!-- /New header -->
	<main class="page-main">
                <div class="page-main__header">
                    <?$APPLICATION->IncludeComponent("infoservice:breadcrumb", "breeadcrumbs", array(
                        "START_FROM" => "",
                        "PATH" => "",
                        "SITE_ID" => "s1"
                    ),
                        false
                    );?>
                    <h1><?$APPLICATION->ShowTitle(true);?></h1>
                </div>
<!--<section class="top-block">-->
    <?/*
        		<div class="left">
					<?$APPLICATION->IncludeComponent(
						"bitrix:menu", 
						"top", 
						array(
							"ROOT_MENU_TYPE" => "left",
							"MAX_LEVEL" => "2",
							"CHILD_MENU_TYPE" => "leftchild",
							"USE_EXT" => "Y",
							"DELAY" => "N",
							"ALLOW_MULTI_SELECT" => "Y",
							"MENU_CACHE_TYPE" => "Y",
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_USE_GROUPS" => "Y",
							"MENU_CACHE_GET_VARS" => array(
							),
							"COMPONENT_TEMPLATE" => "top"
						),
						false
					);?>
					<!--<aside class="enter-to-cro">
					<a href="#calcFormArea"
					onclick="ga('send', 'event', 'countSRO', 'hitted'); yaCounter12105325.reachGoal('count-sro-left);"
					class="btn-primary x1 openPopup">Рассчитать стоимость СРО</a>
        			</aside>-->
        			 <aside class="block-news">
					<?$APPLICATION->IncludeComponent(
	"bitrix:news.index", 
	"newsblock-new", 
	array(
		"IBLOCK_TYPE" => "news",
		"IBLOCKS" => array(
			0 => "5",
			1 => "6",
			2 => "7",
			3 => "20",
			4 => "49",
		),
		"NEWS_COUNT" => "6",
		"IBLOCK_SORT_BY" => "SORT",
		"IBLOCK_SORT_ORDER" => "ASC",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "SORT",
		"SORT_ORDER2" => "ASC",
		"FIELD_CODE" => array(
			0 => "CODE",
			1 => "NAME",
			2 => "PREVIEW_TEXT",
			3 => "DATE_ACTIVE_FROM",
			4 => "ACTIVE_FROM",
			5 => "DATE_ACTIVE_TO",
			6 => "ACTIVE_TO",
			7 => "IBLOCK_TYPE_ID",
			8 => "IBLOCK_ID",
			9 => "IBLOCK_CODE",
			10 => "IBLOCK_EXTERNAL_ID",
			11 => "",
		),
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "IN_NEWSBLOCK",
			2 => "",
		),
		"FILTER_NAME" => "arrFilter",
		"IBLOCK_URL" => "",
		"DETAIL_URL" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_GROUPS" => "Y",
		"NEWSBLOCK_TITLE" => "Главные новости 2",
		"NEWSBLOCK_CNT" => "3",
		"COMPONENT_TEMPLATE" => "newsblock-new"
	),
	false
);?>
        			 </aside>
					<aside>
					<?/*$APPLICATION->IncludeComponent(
						"infoservice:last.magazine", 
						"newspaper", 
						array(
							"IBLOCK_TYPE" => "magazine",
							"IBLOCK_ID" => "33",
							"CACHE_TYPE" => "A",
							"CACHE_TIME" => "3600000"
						),
						false
					);/?>
					</aside>
        		</div>

        		<div class="content">
                    <?/*
        			<div class="top-info">
						<?if($APPLICATION->GetProperty("NO_BANNER") != "Y"  ):?>
						<?echo $APPLICATION->GetPageProperty("NO_BANNER");?>
						<?if( $APPLICATION->GetProperty("NO_BANNER")!= "Y"):?>
						<?$APPLICATION->IncludeComponent(
							"bitrix:news.list", 
							"hero-slider", 
							array(
								"ACTIVE_DATE_FORMAT" => "d/m/Y",
								"ADD_SECTIONS_CHAIN" => "N",
								"AJAX_MODE" => "N",
								"AJAX_OPTION_ADDITIONAL" => "",
								"AJAX_OPTION_HISTORY" => "N",
								"AJAX_OPTION_JUMP" => "N",
								"AJAX_OPTION_STYLE" => "Y",
								"CACHE_FILTER" => "N",
								"CACHE_GROUPS" => "Y",
								"CACHE_TIME" => "36000000",
								"CACHE_TYPE" => "A",
								"CHECK_DATES" => "Y",
								"COMPONENT_TEMPLATE" => "hero-slider",
								"DETAIL_URL" => "",
								"DISPLAY_BOTTOM_PAGER" => "N",
								"DISPLAY_DATE" => "N",
								"DISPLAY_NAME" => "N",
								"DISPLAY_PICTURE" => "N",
								"DISPLAY_PREVIEW_TEXT" => "N",
								"DISPLAY_TOP_PAGER" => "N",
								"FIELD_CODE" => array(
									0 => "PREVIEW_TEXT",
									1 => "DETAIL_PICTURE",
									2 => "",
								),
								"FILTER_NAME" => "",
								"HIDE_LINK_WHEN_NO_DETAIL" => "N",
								"IBLOCK_ID" => "53",
								"IBLOCK_TYPE" => "new_main_page",
								"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
								"INCLUDE_SUBSECTIONS" => "N",
								"MESSAGE_404" => "",
								"NEWS_COUNT" => "5",
								"PAGER_BASE_LINK_ENABLE" => "N",
								"PAGER_DESC_NUMBERING" => "N",
								"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
								"PAGER_SHOW_ALL" => "N",
								"PAGER_SHOW_ALWAYS" => "N",
								"PAGER_TEMPLATE" => ".default",
								"PAGER_TITLE" => "Новости",
								"PARENT_SECTION" => "",
								"PARENT_SECTION_CODE" => "",
								"PREVIEW_TRUNCATE_LEN" => "",
								"PROPERTY_CODE" => array(
									0 => "OUT_TEXT",
									1 => "LINK",
									2 => "COLOR",
									3 => "WIDTH",
									4 => "",
								),
								"SET_BROWSER_TITLE" => "N",
								"SET_LAST_MODIFIED" => "N",
								"SET_META_DESCRIPTION" => "N",
								"SET_META_KEYWORDS" => "N",
								"SET_STATUS_404" => "N",
								"SET_TITLE" => "N",
								"SHOW_404" => "N",
								"SORT_BY1" => "SORT",
								"SORT_BY2" => "",
								"SORT_ORDER1" => "ASC",
								"SORT_ORDER2" => "",
								"CACHE_NOTES" => ""
							),
							false
						);?>
							<?endif;?>
						<?endif;?>
						 
						<div class="income" style="padding-left: 10px;">
        					
        					
							<?$APPLICATION->IncludeComponent(
	"bitrix:form.result.new", 
	"income", 
	array(
		"SEF_MODE" => "N",
		"WEB_FORM_ID" => "7",
		"LIST_URL" => "index.php",
		"AJAX_MODE" => "N",
		"EDIT_URL" => "index.php",
		"SUCCESS_URL" => "",
		"CHAIN_ITEM_TEXT" => "",
		"CHAIN_ITEM_LINK" => "",
		"IGNORE_CUSTOM_TEMPLATE" => "Y",
		"USE_EXTENDED_ERRORS" => "Y",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"SEF_FOLDER" => "",
		"AJAX_OPTION_ADDITIONAL" => rand(),
		"COMPONENT_TEMPLATE" => "income",
		"TITLE_TEXT" => "ПОЛУЧИТЬ СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ ПО ВСТУПЛЕНИЮ В СРО",
		"BUTTON_TEXT" => "Получить",
		"VARIABLE_ALIASES" => array(
			"WEB_FORM_ID" => "WEB_FORM_ID",
			"RESULT_ID" => "RESULT_ID",
		)
	),
	false
);?>
							 
        				</div>
        			</div>
        			<?if($APPLICATION->GetProperty("FULL_WIDTH") == "Y"):?>
					 	<?$new = true;  ?>
					<?endif;?>
                    /?>
        			<div class="bottom-info <?if(!$new):?>c<?endif;?>">
					<?if($new):?><div class="c no-bottom-pad"><?endif;?>
					<?$APPLICATION->IncludeComponent("infoservice:breadcrumb", "breeadcrumbs", array(
									"START_FROM" => "",
									"PATH" => "",
									"SITE_ID" => "s1"
									),
									false
								);?>
					<?if($new):?></div><?endif;?>

					 <?if($new):?><h2 class="c no-top-pad"><?$APPLICATION->ShowTitle(true);?></h2><?endif;?>
                        */?>