function Div(el)
  if el.classes:includes("link-block") then
    local href = el.attributes["href"] or "#"
    local target = el.attributes["target"] or "_blank"

    local content_parts = {}
    for _, block in ipairs(el.content) do
      if block.t == "RawBlock" and block.format == "html" then
        table.insert(content_parts, block.text)
      else
        table.insert(content_parts, pandoc.write(pandoc.Pandoc({block}), "html"))
      end
    end
    local content = table.concat(content_parts, "\n")

    local html = string.format([[
<a href="%s" target="%s">
  <div class="link-block">
    <div class="project-block">
      %s
    </div>
  </div>
</a>
]], href, target, content)

    return pandoc.RawBlock("html", html)
  end
end
