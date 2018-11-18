// MEPH.define('Template', {
//     requires: ['MEPH.util.Dom'],
import * as A from './array';

export function getDefinedClass(_class, offset) {
    var namespaceSplit = _class.split(".");

    offset = offset || window;
    for (var i = 0; i < namespaceSplit.length; i++) {
        if (offset[namespaceSplit[i]] === null || offset[namespaceSplit[i]] === undefined) {
            return null;
        }
        else {
            offset = offset[namespaceSplit[i]];
        }
    }
    return offset;
};
export const getPathValue = getDefinedClass;

export default class Template {
    static hasCommands(str) {
        return (str || '').split('|').length > 1;
    }
    static getCommands(str) {
        return (str || '').split('|').select(function (x) {
            var split = x.split(',');
            var c = split.first();
            var args = split.subset(1);
            return {
                command: getPathValue(c.trim()),
                args: args.select(function (x) {
                    try {
                        return getPathValue(x) || x
                    }
                    catch (e) {
                    }
                    return x;
                })
            }
        }).where(function (t) {
            return t && t.command;
        });
    }
    static getIntialPath(str) {
        return (str || '').split('|')[0];
    }
    static getTemplatePaths(templateString) {
        var $Template = Template,
            val;
        var singularSymbol = '@';
        var regex = new RegExp('({{)[A-Za-z0-9_.' + singularSymbol + ' ,\'\|]*(}})', 'g');
        var hasTemplate = $Template.hasTemplate(templateString);
        if (hasTemplate) {
            var res = templateString.match(regex);
            return res.reverse().unique().select(function (x) {
                return x.split('').subset(2, x.length - 2).join('');
            }).select(function (t) {
                return $Template.getIntialPath(t).trim();
            });
        }
        return [];
    }
    static hasTemplate(templateString) {
        var singularSymbol = '@';
        var regex = new RegExp('({{)[A-Za-z0-9_.' + singularSymbol + ' ,\'\|]*(}})', 'g');
        var hasTemplate = regex.test(templateString);
        return hasTemplate;
    }
    static bindTemplate(templateString, data) {
        var $Template = Template,
            val;
        var singularSymbol = '@';
        var regex = new RegExp('({{)[A-Za-z0-9_.' + singularSymbol + ' ,\'\|]*(}})', 'g');
        var hasTemplate = regex.test(templateString);
        if (hasTemplate) {
            var res = templateString.match(regex);

            res.reverse().unique().select(function (x) {
                return x.split('').subset(2, x.length - 2).join('');
            }).forEach(function (t) {
                var intialPath = $Template.getIntialPath(t, data).trim();
                if (intialPath === '' || intialPath === singularSymbol) {
                    val = data;
                }
                else {
                    val = getPathValue(intialPath, data);
                }
                if ($Template.hasCommands(t)) {
                    var commands = $Template.getCommands(t);
                    commands.forEach(function (commandObj) {
                        val = commandObj.command.apply(null, [val].concat(commandObj.args));
                    });
                }
                else if (intialPath !== singularSymbol) {
                    val = getPathValue(intialPath, data);
                }
                t = t.split('|').join('\\|')
                var subregex = new RegExp('({{)' + t + '(}})', 'g');
                templateString = templateString.replace(subregex, val === null || val === undefined ? '' : val);
            });
        }
        return templateString;
    }
}
