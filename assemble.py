import datetime as dt
import os.path
import re


try:
    with open('assembly.html') as file:
        contents = file.read()
    tags = re.findall(r'(([ \t]*)\{\!([\w\d\.]+)\!\})', contents)
    for tag in tags:
        with open(os.path.join('components', tag[2])) as file:
            component = ''
            for line in file:
                component += (tag[1] + line)
            contents = contents.replace(tag[0], component)
    with open('assemblage_' + dt.datetime.strftime(dt.datetime.now(), '%Y%m%d%H%M%S') + '.html', 'w') as file:
        file.write(contents)
except (OSError, UnicodeDecodeError) as e:
    print(repr(e))