const CarritoCompra = require('../index')

describe('Clase CarritoCompra', () => {
    let carritoCompra;

    beforEach(() => {
        carritoCompra = new CarritoCompra;
    })
})

describe('Sobre el constructor de la clase CarritoCompra ', ()=>{
    it('CarritoCompra debería ser una clase', ()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    })
    it('carritoCompra debería ser una instancia de la clase CarritoCompra', ()=>{
        expect(carritoCompra instanceof CarritoCompra).toBe(true)
    })

    it('Deberia guardar productos en una lista', ()=>{
        expect(carritoCompra.products).toEqual([])
    })
})

describe('Metodos de la clase CarritoCompra', ()=>{
    const producto1={
        id:1,
        name:'Lapicero Azul',
        price: 1000,
        quantity: 3
    }
    const producto2={
        id:2,
        name:'Lapicero Azul',
        price: 900,
        quantity: 5
    }

    it('Deberia tener un metodo llamado agregarProducto', ()=>{
        expect(typeof carritoCompra.agregarProducto).toBe('function')
    })

    it('Deberia tener un metodo llamado calcularTotal', ()=>{
        expect(typeof carritoCompra.calcularTotal).toBe('function')
    })

    it('Deberia tener un metodo llamado aplicarDescuento', ()=>{
        expect(typeof carritoCompra.aplicarDescuento).toBe('function')
    })

    it('El metodo agregarProducto deberia poder agregar un producto a la lista', ()=>{
        carritoCompra.agregarProducto(producto1)
        expect(carritoCompra.products).toContain(producto1)
    })

    it('El metodo calcularTotal deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito.', ()=>{
        carritoCompra.agregarProducto(producto1)
        carritoCompra.agregarProducto(producto2)

        const totalExpect = producto1.price * producto1.quantity + producto2.price * producto2.quantity

        const total = carritoCompra.calcularTotal()

        expect(total).toBe(totalExpect)
    })

    it('El metodo aplicarDescuento deberia poder aplicar un descuento al total de la compra', ()=>{
        carritoCompra.agregarProducto(producto1)
        carritoCompra.agregarProducto(producto2)

        const subtotal = producto1.price * producto1.quantity + producto2.price * producto2.quantity

        const porcentajeDescuento=15
        
        const totalExpect = subtotal - (subtotal * (porcentajeDescuento/100))

        const total = carritoCompra.aplicarDescuento(porcentajeDescuento)

        expect(totalExpect).toBe(total)
    })
})