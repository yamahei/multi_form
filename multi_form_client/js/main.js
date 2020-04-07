"use strict";

/**
 * CONST
 */

//入力チェックと値返却イベント
const EVENT_VALID = 'EVENT_VALID';

//ページ遷移と送信イベント
const EVENT_NEXT = 'EVENT_NEXT';
const EVENT_BACK = 'EVENT_BACK';
const EVENT_SEND = 'EVENT_SEND';

//フォームタイプのグループ（1タグファイルで管理する単位）
const TYPE_TEXTS  = "text,url,email,tel";
const TYPE_DATES  = "date,time,datetime-local";//datetime,week,month
const TYPE_LISTS = "radio,checkbox";

/**
 * [debug] sample config
 */
((g)=>{
    // form setting. TODO: given from server.
    const config = {

        // default values: posted to this form.
        values: {
            //aaa: 1,
        },
        // URL to send the inputed form data.
        sendto: "http://url.to.send.values?or=empty",
        // URL to transits after posted.
        transfer: "http://url.to.next.page?or=empty",
        // a page before forms.
        // firstpage: {
        //     title: "This is first page.",
        //     content: "# hello, markdown \n\n hogehogeho-",
        // },
        // a page after forms.
        // lastpage: {
        //     title: "This is last page.",
        //     content: "# good-by, markdown \n\n hogehogeho-",
        // },
        pages: [{//page object
            title: "サンプルです",
            description: "全てのフォームをガンバリマス",
            forms: [//form objects
                {
                    type: "text",//*required
                    uniqid: "aaa",//*required || page0_form0_text
                    label: "「text」です",
                    required: true,
                    maxlength: 10,
                    pattern: '^https?://.*$',
                },
                {
                    type: "text",//*required
                    uniqid: "page0_form1_text",//*required || page0_form0_text
                    required: true,
                },
                {
                    type: "date",//*required
                    uniqid: "3",//*required || page0_form0_text
                },
                {
                    type: "time",//*required
                    uniqid: "4",//*required || page0_form0_text
                },
                {
                    type: "datetime-local",//*required
                    uniqid: "5",//*required || page0_form0_text
                },
                // {
                //     type: "texts",
                //     label: "「texts」です",
                //     required: true,
                //     maxlength: 100,
                //     pattern: '^https?://',
                // },
                // {
                //     type: "radio",
                // },
                // {
                //     type: "checkbox",
                // },
                // {
                //     type: "date",
                // },
                // {
                //     type: "time",
                // },
                // {
                //     type: "datetime",
                // },
                // {
                //     type: "number",
                // },
                // {
                //     type: "range",
                // },
                // {
                //     type: "toggle",
                // },
                // {
                //     type: "file",
                // },
            ],
        },{
            title: "2ページ目です",
            description: "出るかな",
            forms: [//form objects
                {
                    type: "text",//*required
                    uniqid: "ccc",
                    label: "「text2」です",
                },
            ],
        }],
    };

    g.config = config;

})(this);

/**
 * Biz
 */
((g)=>{
    const biz = {};
    g.biz = biz;
})(this);

