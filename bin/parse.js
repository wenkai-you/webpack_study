const esprima = require('esprima')

module.exports = function (source) {
    let ast = esprima.parse(source)
    let moduleSelector = {}
    console.log(ast)
    walkASTStatements(moduleSelector, ast.body)
}

function walkASTStatements(moduleSelector, statements) {
    statements.forEach(statement => {walkStatement(moduleSelector, statement)})
}
function walkStatement(moduleSelector, statement) {
    const type = statement.type
    switch (type) {
        case 'VariableDeclaration':
            walkVariableDeclarations(moduleSelector, statement.declarations)
            break;
        case 'ExpressionStatement':
            break;
        case 'BlockStatement':
            walkASTStatements(moduleSelector, statement.body)
            break;
        default:
            break;
    }
}

function walkVariableDeclarations(moduleSelector, declarations){
    declarations.forEach(declaration => {walkVariableDeclaration(moduleSelector,declaration)})
}
function walkVariableDeclaration(moduleSelector, declaration){
    
}