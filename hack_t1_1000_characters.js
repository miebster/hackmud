function(context, args)
{ // s:#s.unknown_gf3rff.pub_info_t9qxkr,

    //to help debug your script, call t("debug message")
    function t(m)
    {
        #s.chats.tell({to:context.caller,msg:m})
    }

    function c()
    {
        o = args.s.call(d)
    }

    function f(q)
    {
        return o.includes(q)
    }

    function g(q)
    {
        if(f(q))
        {
            t(q)
        }
        return f(q)
    }

    // commented out to save character count.  Add this back in to display usage if called incorrectly
    // if(!args || !args.s)
    // {
    //     return{ok:false,msg:"usage: miebster.hack_t1 {s:#s.unknown_gf3rff.pub_info_t9qxkr}"}
    // }

    // commented out to save character count.  Add this back in if you want to check that SEC level of target.
    // if(#s.scripts.get_level({name:args.s.name})<4)
    // {
    //     return {ok:false, msg:"The target you have specified is not FULLSEC"}
    // }

    var x = ["red", "orange","yellow","lime","green","cyan","blue","purple"]
    var p = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    var e = ["open","unlock","release"]

    var i = 0
    var d = {}
    var o = {}
    c()

    while(f("+LOCK_ERROR+"))
    {

        i = 0
        if (g("!EZ_21!"))
        {
            while (f("!EZ_21") || f("is not"))
            {
                d.EZ_21 = e[i++]
                c()
            }
        }

        i=0
        if (g("!EZ_35!"))
        {
            while(!f("digit"))
            {
                d.EZ_35 = e[i++]
                c()
            }
            i=0
            while(f("digit"))
            {
                d.digit = i++
                c()
            }
        }


        i=0
        if (g("!EZ_40!"))
        {
            while (!f("ez_prime"))
            {
                d.EZ_40 = e[i++]
                c()
            }
            i=0
            while (f("prime"))
            {
                d.ez_prime = p[i++]
                c()
            }
        }

        i = -1
        if (g("!c001!"))
        {
            while (f("!c001") || f("is not"))
            {
                d.c001 = x[++i]
                d.color_digit = x[i].length
                c()
            }
        }

        i = -1
        if (g("!c002!"))
        {
            while (f("!c002") || f("is not"))
            {
                d.c002 = x[++i]
                d.c002_complement = x[(i+4)%8]
                c()
            }
        }

        i = -1
        if (g("!c003!"))
        {
            while (f("!c003") || f("is not"))
            {
                d.c003 = x[++i]
                d.c003_triad_1 = x[(i+5)%8]
                d.c003_triad_2 = x[(i+3)%8]
                c()
            }
        }

    }

    return o
}