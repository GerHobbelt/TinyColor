require 'rubygems'

HEADER = /((^\s*\/\/.*\n)+)/

desc "rebuild the tinytinycolor.js files for distribution"
task :build do
  begin
    require 'closure-compiler'
  rescue LoadError
    puts "closure-compiler not found.\nInstall it by running 'gem install closure-compiler"
    exit
  end
  source = File.read 'tinytinycolor.js'
  header = source.match(HEADER)
  File.open('dist/tinytinycolor-min.js', 'w+') do |file|
    compressed = Closure::Compiler.new.compress(source)
    file.write header[1].squeeze(' ') + compressed
  end


  system('docco tinytinycolor.js')

end
