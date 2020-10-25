# frozen_string_literal:true

start = 'A'
sku_generator = lambda {
  temp = start
  start = start.next
  temp + rand(10..99).to_s
}

Widget::SHAPES.each do |shape|
  Widget::COLORS.each do |color|
    Widget.create(sku: sku_generator.call, shape: shape, color: color)
  end
end
